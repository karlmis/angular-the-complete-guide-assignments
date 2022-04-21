import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe'
      , 'This is simply a test'
      , 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg?20170213105318'
      , [new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('A Test Recipe1'
      , 'This is simply a test1'
      , 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg?20170213105318'
      , [new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
