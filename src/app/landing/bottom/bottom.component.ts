import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {

  @Input() stageValid: boolean;
  @Input() backEnabled: boolean;
  @Input() button1Text: string;
  @Input() button2Text: string;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }
  onButtonClick(buttonName) {
    this.buttonClicked.emit(buttonName);
  }
}
