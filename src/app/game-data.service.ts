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
    if (this.isOnNewestStep()) {
      this.nextPlayer();
    }
    this.roundPredictions.set(this.playerNames[this.currentPlayerId], amount);
  }
  addGot(amount) {
    if (this.isOnNewestStep()) {
      this.nextPlayer();
    }
    this.roundGots.set(this.playerNames[this.currentPlayerId], amount);
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
