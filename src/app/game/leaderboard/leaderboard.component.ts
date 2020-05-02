import { Component, OnInit, Input } from '@angular/core';
import { GameDataService } from 'src/app/game-data.service';
import { LeaderboardEntry } from 'src/app/LeaderboardEntry';
import { GameStages } from 'src/app/GameStages';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  @Input() title = 'LEADERBOARD';

  GameStages = GameStages;
  totalLeaderboard: Array<LeaderboardEntry>;
  subLeaderboard: Array<LeaderboardEntry>;

  constructor(private gameData: GameDataService) { }

  ngOnInit() {
    this.totalLeaderboard = this.gameData.getLeaderboard();
    this.subLeaderboard = this.totalLeaderboard.slice(3);
  }

}
