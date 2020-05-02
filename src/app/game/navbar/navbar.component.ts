import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() title;
  @Input() roundNumber;
  @Input() roundNumber2;

  constructor() { }

  getTitle() {
    if (this.title === undefined) {
      let title = 'Round of ' + this.roundNumber;
      if (this.roundNumber2 !== undefined) {
        title += '(' + this.roundNumber2 + ')';
      }
      return title;
    } else {
      return this.title;
    }
  }

}
