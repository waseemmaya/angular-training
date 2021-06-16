import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Recipe Name 1',
      'This is recipe descripiton',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'Recipe Name 2',
      'This is recipe descripiton',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg'
    ),
  ];
  constructor() {}

  onRecipeSelected(recipe: any) {
    this.onSelectRecipe.emit(recipe);
  }

  ngOnInit(): void {}
}
