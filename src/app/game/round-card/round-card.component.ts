import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RoundResult } from 'src/app/RoundResults';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-round-card',
  templateUrl: './round-card.component.html',
  styleUrls: ['./round-card.component.css']
})
export class RoundCardComponent implements OnInit {

  @Input() playerName: string;
  @Input() predicted: string;
  @Input() score: string;
  @Input() diff: string;
  @Input() got: string;
  @Input() correctCount: string;

  warnBonus = false;
  warnPenalty = false;

  tableData: RoundResult[] = [
    { predicted: '', got: '', score: '', diff: '', correctCount: '', name: '' }
  ];
  columns: string[] = ['predicted', 'got', 'score', 'correctCount'];
  dataSource = new MatTableDataSource<RoundResult>(this.tableData);

  constructor() { }

  ngOnInit() {
    this.tableData[0].predicted = this.predicted;
    this.tableData[0].score = this.score;
    this.tableData[0].correctCount = this.correctCount;
    this.warnBonus = +this.correctCount === 4 || +this.correctCount === 5;
    this.warnPenalty = +this.correctCount === -4 || +this.correctCount === -5;
    this.tableData[0].got = this.got;
    this.tableData[0].diff = +this.diff >= 0 ? '+' + this.diff : this.diff;
  }

}
