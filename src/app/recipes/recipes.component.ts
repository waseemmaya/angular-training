import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;
  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
