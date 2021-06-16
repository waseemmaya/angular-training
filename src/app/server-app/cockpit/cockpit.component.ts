import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    type: string;
    name: string;
    content: string;
  }>();
  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}
  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverCreated.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
