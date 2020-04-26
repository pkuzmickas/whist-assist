import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key-grid',
  templateUrl: './key-grid.component.html',
  styleUrls: ['./key-grid.component.css']
})
export class KeyGridComponent implements OnInit {

  buttons = new Array(3);

  @Output() clicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
