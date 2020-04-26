import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GameDataService } from 'src/app/game-data.service';
import { GameStages } from 'src/app/GameStages';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  GameStages = GameStages;
  tableData: ScoreTrio[] = [
    { predicted: '', got: '', score: '' }
  ];
  playerName: string;
  columns: string[] = ['predicted', 'got', 'score'];
  dataSource = new MatTableDataSource<ScoreTrio>(this.tableData);
  leftEnabled = false;
  rightEnabled = true;
  constructor(public gameData: GameDataService) { }

  ngOnInit(): void {
    this.updateCard();
  }

  highlightColumn() {

  }

  updateArrows() {
    this.leftEnabled = this.gameData.currentPlayerId !== 0 || this.gameData.currentStage !== 0;
    this.rightEnabled = !this.gameData.isOnNewestStep();
  }

  updateCard() {
    this.updateArrows();
    this.playerName = this.gameData.playerNames[this.gameData.currentPlayerId];
    const prediction = this.gameData.roundPredictions.get(this.playerName);
    console.log(this.playerName + ' prediction ', prediction);
    if (prediction !== undefined) {
      console.log(this.playerName + ' prediction ', prediction.toString());
      this.tableData[0].predicted = prediction.toString();
    } else {
      this.tableData[0].predicted = '';
    }
    const got = this.gameData.roundGots.get(this.playerName);
    if (got !== undefined) {
      this.tableData[0].got = got.toString();
    } else {
      this.tableData[0].got = '';
    }
    const score = this.gameData.players.get(this.playerName).totalScore;
    if (score !== undefined) {
      this.tableData[0].score = score.toString();
    }
  }

  previousCard() {
    if(this.leftEnabled) {
      this.gameData.previousPlayer();
      this.updateCard();
    }
  }
  nextCard() {
    if(this.rightEnabled) {
      this.gameData.nextPlayer();
      this.updateCard();
    }
  }
}

export interface ScoreTrio {
  predicted: string;
  got: string;
  score: string;
}


