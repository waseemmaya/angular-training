import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  key: string = 'recipe';
  onKeySelected(key: string) {
    this.key = key;
  }
}
