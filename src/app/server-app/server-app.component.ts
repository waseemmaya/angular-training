import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Server } from './../shared/server.model';

@Component({
  selector: 'app-server-app',
  templateUrl: './server-app.component.html',
  // encapsulation : ViewEncapsulation.None
})
export class ServerAppComponent implements OnInit {
  serverElements: Server[] = [new Server('server', 'My Server', 'Hello World')];

  @ViewChild('localRefElement')
  localRefElementData!: ElementRef;
  constructor() {}

  onServerAdded(serverData: any) {
    this.serverElements.push(serverData);
  }

  ngOnInit(): void {}
}
