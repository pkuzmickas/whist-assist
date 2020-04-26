import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameDataService } from 'src/app/game-data.service';

@Component({
  selector: 'app-key-grid',
  templateUrl: './key-grid.component.html',
  styleUrls: ['./key-grid.component.css']
})
export class KeyGridComponent implements OnInit {

  buttons = new Array(3);

  @Output() clicked = new EventEmitter<number>();

  constructor(public gameData: GameDataService) { }

  ngOnInit() {
  }

}
