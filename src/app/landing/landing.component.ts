import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  // names: Array<string>;
  private players;
  readonly minimumPlayers = 3;
  full = false;
  // rows = [];

  constructor() {
    this.players = [
      { name: '' },
      { name: '' },
      { name: '' }
    ];
  }
 // check formarrays
  nameChange(row: number, newName: string): void {
    if (this.allNamesFull()) {
      this.players.push({ name: '' });
    }
  }

  allNamesFull(): boolean {
    for (const player of this.players) {
      if (player.name.length === 0) {
        return false;
      }
    }
    return true;
  }

}
