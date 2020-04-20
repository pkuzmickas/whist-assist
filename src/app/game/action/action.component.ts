import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  columns: string[] = ['predicted', 'got', 'score'];
  dataSource = new MatTableDataSource<ScoreTrio>(TABLE_DATA);

}

export interface ScoreTrio {
  predicted: string;
  got: string;
  score: string;
}

const TABLE_DATA: ScoreTrio[] =  [
  {predicted: '', got: '', score: ''}
];
