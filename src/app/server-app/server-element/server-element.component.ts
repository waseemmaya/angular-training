import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input() element!: { type: string; name: string; content: string };

  constructor() {
    console.log('constructor called: ');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
    console.log('ngOnChanges called: ');
  }

  ngOnInit(): void {
    console.log('ngOnInit called: ');
  }

  ngDoCheck() {
    console.log('ngDoCheck called: ');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called: ');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called: ');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called: ');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called: ');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called: ');
  }
}
