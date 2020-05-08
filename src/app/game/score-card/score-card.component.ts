import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  @Input() rank: number;
  @Input() name: string;
  @Input() score: number;
  @Input() size: string;
  @Input() primary;

  getSize() {
    console.log('size', this.rank);
    if (this.rank === 1) {
      return '1.3em';
    } else if (this.rank < 3) {
      return '0.9em';
    } else {
      return '0.7em';
    }
  }

  constructor() { }
  ngOnInit(): void {
    console.log('PRIMARY:', this.primary !== undefined);
  }



}
