import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  currentStage: LandingStage;
  isStageValid: boolean;

  constructor() {
    this.currentStage = LandingStage.NAME_STAGE;
    this.isStageValid = false;
  }
  onValidityChange(isValid: boolean) {
    console.log(isValid);
    this.isStageValid = isValid;
  }
}

enum LandingStage {
  NAME_STAGE
}
