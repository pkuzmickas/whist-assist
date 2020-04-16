import { Component, ViewChild, ElementRef, Output, EventEmitter, Input, AfterContentInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements AfterContentInit {

  private playerNames: FormArray;
  readonly MINIMUM_PLAYERS = 3;
  readonly MAXIMUM_PLAYERS = 6;
  full = false;
  @ViewChild('lastel', { static: false }) private lastElement: ElementRef;
  @Output() isValid = new EventEmitter<boolean>();
  @Input() namesList: Array<string>;

  constructor() {
    this.playerNames = new FormArray([], [Validators.maxLength(this.MAXIMUM_PLAYERS)]);
  }

  ngAfterContentInit(): void {
    if (this.namesList !== undefined && this.namesList.length !== 0) {
      for (const name of this.namesList) {
        this.addPlayerName(name);
      }
    } else {
      for (let i = 0; i < this.MINIMUM_PLAYERS; i++) {
        this.addPlayerName();
      }
    }

    this.playerNames.statusChanges.subscribe((val) => this.isValid.emit(val === 'VALID'));
  }

  addPlayerName(name = '') {
    this.playerNames.push(new FormControl(name, [Validators.required]));
  }

  isMaxPlayersReached() {
    return this.playerNames.length === this.MAXIMUM_PLAYERS;
  }

  removePlayer(index) {
    this.playerNames.removeAt(index);
  }

  getNamesList() {
    const namesList = [];
    for (const control of this.playerNames.controls) {
      namesList.push(control.value);
    }
    return namesList;
  }

}
