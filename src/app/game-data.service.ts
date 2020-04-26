import { Injectable } from '@angular/core';
import { GameStages } from './GameStages';

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
  roundOf = 1;

  constructor() { }

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
  }
  nextPlayer() {
    this.currentPlayerId = (this.currentPlayerId + 1) % this.playerNames.length;
    if (this.currentPlayerId === 0) { // next stage
      this.currentStage++;
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
