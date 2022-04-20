import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg?20170213105318'),
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg?20170213105318')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeClicked(event: Recipe) {
    this.recipeWasSelected.emit(event);
  }
}
