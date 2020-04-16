import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LandingStage } from '../LandingEnum';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {

  LandingStage = LandingStage;
  @Input() stage: LandingStage;
  @Input() stageValid: boolean;
  @Output() back = new EventEmitter();
  @Output() login = new EventEmitter();
  @Output() continue = new EventEmitter();
  @Output() startGame = new EventEmitter();


  constructor() { }

}
