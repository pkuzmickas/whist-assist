import { Component, OnInit, ViewChild } from '@angular/core';
import {LandingStage} from './LandingEnum';
import { NamesComponent } from './names/names.component';

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

  sessionInfo = {
    names: []
  };

  @ViewChild(NamesComponent, {static: false})
  private namesComponent: NamesComponent;

  constructor() {
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
  }
  handleLogin() {

  }
  handleContinue() {
    this.currentStage++;
    this.sessionInfo.names = this.namesComponent.getNamesList();
  }
  handleStart() {

  }


}

