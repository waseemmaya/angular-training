import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient('Mango', 45),
    new Ingredient('Apple', 25),
    new Ingredient('Tomato', 15),
  ];

  constructor() {}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
