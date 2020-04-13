import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  private playerNames: FormArray;
  readonly MINIMUM_PLAYERS = 3;
  readonly MAXIMUM_PLAYERS = 6;
  full = false;
  @ViewChild('lastel', { static: false }) private lastElement: ElementRef;
  @Output() isValid = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.playerNames = new FormArray([], [Validators.maxLength(this.MAXIMUM_PLAYERS)]);
    for (let i = 0; i < this.MINIMUM_PLAYERS; i++) {
      this.addPlayerName();
    }
    this.playerNames.statusChanges.subscribe((val) => this.isValid.emit(val === 'VALID'));
  }

  addPlayerName() {
      this.playerNames.push(new FormControl('', [Validators.required]));
  }

  isMaxPlayersReached() {
    return this.playerNames.length === this.MAXIMUM_PLAYERS;
  }

  removePlayer(index) {
    this.playerNames.removeAt(index);
  }

}
