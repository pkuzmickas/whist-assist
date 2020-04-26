import { Component, OnInit, ViewChild } from '@angular/core';
import { GuessesComponent } from './guesses/guesses.component';
import { ActionComponent } from './action/action.component';
import { GameDataService } from '../game-data.service';
import { GameStages } from '../GameStages';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild(GuessesComponent, { static: false }) guessComponent: GuessesComponent;
  @ViewChild(ActionComponent, { static: false }) actionComponent: ActionComponent;

  constructor(private gameData: GameDataService) {

  }
  ngOnInit(): void {
    /*
      TESTING
    */
    this.gameData.initGame();
    this.gameData.addPlayers(['Paulius', 'Ignas', 'Ioan']);
    console.log(this.gameData.players);
  }

  updateCardsWithGuess() {
    if(this.gameData.getNewestStage() === GameStages.GUESS_STAGE) {
      this.guessComponent.updatePredictions();
    } else if (this.gameData.getNewestStage() === GameStages.GOT_STAGE) {
      this.guessComponent.updateScores();
    }
    this.actionComponent.updateCard();
  }
  updateCardsWithGot() {
    this.guessComponent.updateScores();
    this.actionComponent.updateCard();
  }

  keyClicked(key) {
    switch (this.gameData.currentStage) {
      case GameStages.GUESS_STAGE:
        this.gameData.addGuess(key);
        this.updateCardsWithGuess();
        break;
      case GameStages.GOT_STAGE:
        this.gameData.addGot(key);
        this.updateCardsWithGot();
        break;
    }
  }


}
