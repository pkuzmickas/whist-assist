import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  @Input() style: string;
  @Input() bonus: string;

  constructor() { }

  getOptions() {
    return { style: this.style, bonus: this.bonus };
  }

  bonusChange(e) {
    this.bonus = e.value;
  }

  styleChange(e) {
    this.style = e.value;
  }


}
