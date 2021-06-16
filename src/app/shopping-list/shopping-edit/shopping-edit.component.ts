import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {
  name: string = '';
  amount: number = 0;

  @Output() addIngredient = new EventEmitter<Ingredient>();
  constructor() {}
  ngOnInit(): void {}

  onAdd() {
    this.addIngredient.emit({ name: this.name, amount: this.amount });
  }
}
