import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Mango', 45),
    new Ingredient('Apple', 25),
    new Ingredient('Tomato', 15),
  ];

  constructor() {}

  ngOnInit(): void {}
}
