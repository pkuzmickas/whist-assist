import { Component, OnInit, ViewChild } from '@angular/core';
import {LandingStage} from './LandingEnum';
import { NamesComponent } from './names/names.component';
import { OptionsComponent } from './options/options.component';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: []
})

export class LandingComponent {
  LandingStage = LandingStage; // For HTML to recognise the enum
  currentStage: LandingStage;
  isStageValid: boolean;

  pregameInfo = {
    names: [],
    style: '181',
    bonus: '5',
    penalty: '5'
  };

  @ViewChild(NamesComponent, {static: false}) private namesComponent: NamesComponent;
  @ViewChild(OptionsComponent, {static: false}) private optionsComponent: OptionsComponent;


  constructor(private gameData: GameDataService) {
    this.currentStage = LandingStage.NAME_STAGE;
    this.isStageValid = false;
  }
  onValidityChange(isValid: boolean) {
    this.isStageValid = isValid;
  }
  getTopTitle(): string {
    if (this.currentStage === LandingStage.NAME_STAGE) {
      return 'PLAYER NAMES';
    } else if (this.currentStage === LandingStage.OPTIONS_STAGE) {
      return 'EXTRA OPTIONS';
    }
  }
  handleBack() {
    this.currentStage--;
    const options = this.optionsComponent.getOptions();
    this.pregameInfo.bonus = options.bonus;
    this.pregameInfo.style = options.style;
    this.pregameInfo.penalty = options.penalty;
  }
  handleLogin() {

  }
  handleContinue() {
    this.currentStage++;
    this.pregameInfo.names = this.namesComponent.getNamesList();
  }
  handleStart() {
    const options = this.optionsComponent.getOptions();
    this.gameData.options = {
      bonusAmount: +options.bonus,
      penaltyAmount: +options.penalty,
      playStyle: options.style
    };
    this.gameData.addPlayers(this.pregameInfo.names);
    this.gameData.initGame();
  }


}

