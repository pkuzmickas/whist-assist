import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {

  @Input() stageValid: boolean;

  constructor() { }
  test() {
    console.log(this.stageValid);
  }
}
