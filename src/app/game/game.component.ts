import { Component, OnInit, ViewChild } from '@angular/core';
import { GuessesComponent } from './guesses/guesses.component';
import { ActionComponent } from './action/action.component';
import { GameDataService } from '../game-data.service';
import { GameStages } from '../GameStages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  GameStages = GameStages;
  invalidGuessKey: number;

  @ViewChild(GuessesComponent, { static: false }) guessComponent: GuessesComponent;
  @ViewChild(ActionComponent, { static: false }) actionComponent: ActionComponent;

  constructor(public gameData: GameDataService, private router: Router) {

  }
  ngOnInit(): void {
    /*
      TESTING
    */
    this.gameData.initGame();
    // this.gameData.addPlayers(['Paulius', 'Ignas', 'Ioan']);
    // this.gameData.currentStage = GameStages.FINAL_STAGE;
    console.log(this.gameData.options);
  }
  newGame() {
    this.gameData.newGame();
    this.router.navigate(['/']);
  }
  updateCardsWithGuess() {
    if (this.gameData.getNewestStage() === GameStages.GUESS_STAGE) {
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
        this.invalidGuessKeyHandler();
        break;
      case GameStages.GOT_STAGE:
        this.gameData.addGot(key);
        this.updateCardsWithGot();
        break;
    }
  }

  invalidGuessKeyHandler() {
    if (this.gameData.isOnLastStepOfStage()) {
      this.invalidGuessKey = this.gameData.getNotViableGuess();
    } else {
      this.invalidGuessKey = undefined;
    }
    console.log('last step? ', this.gameData.isOnLastStepOfStage());
  }

  isRoundValid() {
    return this.gameData.checkRoundValidity();
  }

  previousStage() {
    if (this.gameData.currentStage !== 0) {
      this.gameData.setToLastPlayer();
      this.gameData.currentStage--;
    }
  }
  nextStage() {
    if (this.gameData.currentStage !== GameStages.FINAL_STAGE) {
      this.gameData.currentStage++;
    }
  }

  getRoundNumber2() {
    return this.gameData.roundOf === 1 || this.gameData.roundOf === 8 ? this.gameData.completedRoundsInRoundOf + 1 : undefined;
  }

  checkAllFail() {
    return this.gameData.checkAllFail();
  }

  restartRound() {
    this.gameData.restartRound();
  }

}
