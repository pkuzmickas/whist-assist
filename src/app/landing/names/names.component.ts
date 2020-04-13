import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__, ViewChild, ElementRef } from '@angular/core';
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

  ngOnInit(): void {
    this.playerNames = new FormArray([], [Validators.maxLength(this.MAXIMUM_PLAYERS)]);
    for (let i = 0; i < this.MINIMUM_PLAYERS; i++) {
      this.addPlayerName();
    }
  }

  addPlayerName() {
      this.playerNames.push(new FormControl('', [Validators.required]));
  }

  isMaxPlayersReached() {
    return this.playerNames.length === this.MAXIMUM_PLAYERS;
  }

}
