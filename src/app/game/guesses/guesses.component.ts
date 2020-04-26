import { Component, OnInit, Output } from '@angular/core';
import { GameDataService } from 'src/app/game-data.service';
import { GameStages } from 'src/app/GameStages';

export interface RoundInfo {
  name: string;
  info: string;
}

@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})

export class GuessesComponent implements OnInit {

  roundInformation: Array<RoundInfo> = [];
  constructor(public gameData: GameDataService) { }

  ngOnInit() {
  }

  getTitle() {
    switch (this.gameData.currentStage) {
      case GameStages.GUESS_STAGE:
        return 'PREDICTIONS';
      case GameStages.GOT_STAGE:
        return 'SCORES';
    }
  }

  updatePredictions() {
    this.roundInformation = [];
    for (const playerName of this.gameData.roundPredictions.keys()) {
      this.roundInformation.push({
        name: playerName,
        info: this.gameData.roundPredictions.get(playerName).toString()
      });
    }
  }

  updateScores() {
    console.log(this.gameData.roundPredictions);
    this.roundInformation = [];
    for (const playerName of this.gameData.roundGots.keys()) {
      const info = this.gameData.roundPredictions.get(playerName).toString() + ' | '
        + this.gameData.roundGots.get(playerName).toString() + ' | '
        + this.gameData.players.get(playerName).totalScore.toString();
      this.roundInformation.push({
        name: playerName,
        info
      });
    }
  }


}


