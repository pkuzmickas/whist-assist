import { Component, OnInit, Input } from '@angular/core';
import { GameDataService } from 'src/app/game-data.service';
import { RoundResult } from 'src/app/RoundResults';

@Component({
  selector: 'app-round-end',
  templateUrl: './round-end.component.html',
  styleUrls: ['./round-end.component.css']
})
export class RoundEndComponent implements OnInit {

  roundResults: Array<RoundResult> = [];

  constructor(private gameData: GameDataService) { }

  ngOnInit() {
    for (const name of this.gameData.playerNames) {
      this.roundResults.push({
        name,
        predicted: this.gameData.roundPredictions.get(name).toString(),
        got: this.gameData.roundGots.get(name).toString(),
        score: this.gameData.players.get(name).totalScore.toString(),
        correctCount: this.gameData.players.get(name).correctCount.toString(),
        diff: this.gameData.roundPoints.get(name).toString()
      });
    }
  }

}
