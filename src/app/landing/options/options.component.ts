import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  @Input() style: string;
  @Input() bonus: string;
  @Input() penalty: string;

  bonusOptions = ['0', '5', '10'];
  penaltyOptions = ['0', '5', '10'];
  styleOptions = ['181', '818'];

  constructor() { }

  getOptions() {
    return { style: this.style, bonus: this.bonus, penalty: this.penalty };
  }

  bonusChange(e) {
    this.bonus = e.value;
  }

  styleChange(e) {
    this.style = e.value;
  }

  penaltyChange(e) {
    this.penalty = e.value;
  }

}
