import { Component, ViewChild, ElementRef, Output, EventEmitter, Input, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit, OnDestroy {

  private playerNames: FormArray;
  readonly MINIMUM_PLAYERS = 3;
  readonly MAXIMUM_PLAYERS = 6;
  full = false;
  validSub: Subscription;
  @Output() isValid = new EventEmitter<boolean>();
  @Input() namesList: Array<string>;

  constructor() {
    this.playerNames = new FormArray([], [Validators.maxLength(this.MAXIMUM_PLAYERS)]);
  }

  ngOnDestroy(): void {
    this.validSub.unsubscribe();
  }

  ngOnInit(): void {
    if (this.namesList !== undefined && this.namesList.length !== 0) {
      for (const name of this.namesList) {
        this.addPlayerName(name);
      }
    } else {
      for (let i = 0; i < this.MINIMUM_PLAYERS; i++) {
        this.addPlayerName();
      }
    }
    this.validSub = this.playerNames.statusChanges.subscribe((val) => this.isValid.emit(val === 'VALID'));
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
