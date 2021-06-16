import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() keySelected = new EventEmitter<string>();
  // @Input() currentKey: string = 'recipe';

  // @Input() element!: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {
    // console.log('currentKey: ', this.currentKey);
  }

  onSelect(key: string) {
    this.keySelected.emit(key);
  }
}
