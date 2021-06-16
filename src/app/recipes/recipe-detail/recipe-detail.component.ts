import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe!: Recipe;
  constructor() {}

  ngOnInit(): void {
    // this.selectedRecipe
    console.log('this.selectedRecipe: ', this.selectedRecipe);
  }
}
