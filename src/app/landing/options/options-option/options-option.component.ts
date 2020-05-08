import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-options-option',
  templateUrl: './options-option.component.html',
  styleUrls: ['./options-option.component.css']
})
export class OptionsOptionComponent {

  @Output() toggleChange = new EventEmitter();
  @Input() toggles: Array<string>;
  @Input() curVal: string;
  @Input() name: string;
  constructor() { }

  change(e: any) {
    this.toggleChange.emit(e);
  }

}
