import { Injectable } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  players: Array<PlayerData> = [];
  session;
  options: GameOptions;
  constructor() { }

  addPlayers(names: Array<string>) {
    for (const name of names) {
      this.players.push({
        name,
        totalScore: 0,
        mistakeCount: 0,
        correctCount: 0
      });
    }
  }
}

export interface PlayerData {
  name: string;
  totalScore: number;
  mistakeCount: number;
  correctCount: number;
}

export interface GameOptions {
  bonusAmount: number;
  playStyle: string;
}

// export interface GameSession {

// }
