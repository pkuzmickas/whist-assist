import { Component, OnInit } from '@angular/core';

enum LandingStage {
  NAME_STAGE,
  OPTIONS_STAGE
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  LandingStage = LandingStage; // For HTML to recognise the enum
  currentStage: LandingStage;
  isStageValid: boolean;
  button2Text: string;

  constructor() {
    this.currentStage = LandingStage.NAME_STAGE;
    this.isStageValid = false;
    this.button2Text = 'CONTINUE';
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
  onBottomButtonClicked(buttonName) {
    if (buttonName === 'button2') {
      if (this.currentStage === LandingStage.NAME_STAGE) {
        this.currentStage = LandingStage.OPTIONS_STAGE;
        this.button2Text = 'START GAME';
      }
    } else if (buttonName === 'BACK') {
      this.currentStage = LandingStage.NAME_STAGE;
      this.button2Text = 'CONTINUE';
    } else if (buttonName === 'button1') {

    }
  }

}

