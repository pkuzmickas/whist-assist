import { Injectable } from '@angular/core';
import { GameStages } from './GameStages';
import { LeaderboardEntry } from './LeaderboardEntry';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  players: Map<string, PlayerData> = new Map<string, PlayerData>();
  roundPredictions: Map<string, number> = new Map<string, number>();
  roundGots: Map<string, number> = new Map<string, number>();
  options: GameOptions;
  playerNames: Array<string> = [];
  currentPlayerId: number;
  currentStage: GameStages = GameStages.GUESS_STAGE;
  roundOf;
  completedRoundsInRound = 0;
  goingUp;
  loopDone = false;
  constructor() {
    //TESTING
    // this.options = {  playStyle: '181', bonusAmount: 5 };


  }

  addPlayers(names: Array<string>) {
    for (const name of names) {
      this.playerNames.push(name);
      this.players.set(name, {
        totalScore: 0,
        mistakeCount: 0,
        correctCount: 0
      });
    }
  }
  initGame() {
    this.currentPlayerId = 0;
    if (this.options.playStyle === '818') {
      this.roundOf = 8;
      this.goingUp = false;
    } else {
      this.roundOf = 1;
      this.goingUp = true;
    }
  }
  nextPlayer() {
    this.currentPlayerId = (this.currentPlayerId + 1) % this.playerNames.length;
    if (this.currentPlayerId === 0) { // next stage
      this.currentStage++;
      if (this.currentStage === GameStages.FINAL_STAGE) {
        if ((this.options.playStyle === '181' && this.roundOf === 1 && this.completedRoundsInRound === this.players.size - 1 && this.loopDone)
          || (this.options.playStyle === '818' && this.roundOf === 8 && this.completedRoundsInRound === this.players.size - 1 && this.loopDone)) {
          this.currentStage = GameStages.GAME_OVER;
        }
      }
    }
  }
  addGuess(amount) {
    const onNewestStep = this.isOnNewestStep();
    const playerName = this.playerNames[this.currentPlayerId];
    const got = this.roundGots.get(playerName);
    if (got !== undefined) {
      this.players.get(playerName).totalScore -= this.calculateScore();
    }
    this.roundPredictions.set(playerName, amount);
    if (got !== undefined) {
      this.players.get(playerName).totalScore += this.calculateScore();
    }
    if (onNewestStep) {
      this.nextPlayer();
    }
  }
  addGot(amount) {
    const onNewestStep = this.isOnNewestStep();
    const playerName = this.playerNames[this.currentPlayerId];
    if (!onNewestStep) {
      this.players.get(playerName).totalScore -= this.calculateScore();
    }
    this.roundGots.set(playerName, amount);
    this.players.get(playerName).totalScore += this.calculateScore();
    if (onNewestStep) {
      this.nextPlayer();
    }
  }
  previousPlayer() {
    this.currentPlayerId -= 1;
    if (this.currentPlayerId === -1) {
      this.currentPlayerId = this.playerNames.length - 1;
      this.currentStage--;
    }
  }
  isOnNewestStep(): boolean {
    const stepsTaken = this.roundPredictions.size + this.roundGots.size;
    const curStep = this.currentStage * this.playerNames.length + this.currentPlayerId;
    return stepsTaken === curStep;
  }
  getNewestStage(): GameStages {
    const stepsTaken = this.roundPredictions.size + this.roundGots.size;
    return Math.floor(stepsTaken / this.playerNames.length);
  }
  calculateScore(playerName?) {
    if (playerName === undefined) {
      playerName = this.playerNames[this.currentPlayerId];
    }
    let roundPoints = 0;
    const got = this.roundGots.get(playerName);
    const predicted = this.roundPredictions.get(playerName);
    if (got === predicted) {
      roundPoints += 5 + got;
    } else {
      roundPoints -= Math.abs(got - predicted);
    }
    return roundPoints;
  }
  scoreCompareFunction(playerA: LeaderboardEntry, playerB: LeaderboardEntry) {
    if (playerA.score > playerB.score) {
      return -1;
    }
    if (playerA.score < playerB.score) {
      return 1;
    }
    return 0;
  }
  getLeaderboard(): Array<LeaderboardEntry> {
    const leaderboard: Array<LeaderboardEntry> = [];
    for (const playerName of this.players.keys()) {
      leaderboard.push({
        score: this.players.get(playerName).totalScore,
        name: playerName
      });
    }
    leaderboard.sort(this.scoreCompareFunction);
    return leaderboard;
  }
  newGame() {
    this.currentStage = 0;
    this.roundGots.clear();
    this.roundPredictions.clear();
    this.players.clear();
    this.playerNames = [];
    this.roundOf = 1;
    this.loopDone = false;
    this.completedRoundsInRound = 0;
  }
  nextRound() {

    this.currentStage = GameStages.GUESS_STAGE;
    this.roundGots.clear();
    this.roundPredictions.clear();
    this.currentPlayerId = 0;
    let addingRound = true;
    if (this.roundOf === 1 || this.roundOf === 8) {
      this.completedRoundsInRound++;
      addingRound = false;
      if (this.completedRoundsInRound === this.players.size) {
        addingRound = true;
        this.completedRoundsInRound = 0;
        if (this.roundOf === 1) {
          this.goingUp = true;
          if (this.options.playStyle === '818') {
            this.loopDone = true;
          } else if (this.loopDone) {

          }
        } else if (this.roundOf === 8) {
          this.goingUp = false;
          if (this.options.playStyle === '181') {
            this.loopDone = true;
          }
        }
      }
    }
    console.log(this.roundOf);
    console.log(addingRound);
    console.log(this.goingUp);

    if (addingRound) {
      this.goingUp ? this.roundOf++ : this.roundOf--;
    }
    console.log(this.roundOf);
  }
}

export interface PlayerData {
  totalScore: number;
  mistakeCount: number;
  correctCount: number;
}

export interface GameOptions {
  bonusAmount: number;
  playStyle: string;
}
