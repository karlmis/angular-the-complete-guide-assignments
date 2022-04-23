import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = null;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.setRecipe(+this.route.snapshot.params['id']);
    this.route.params.subscribe((params: Params) => this.setRecipe(+params['id']));
  }

  private setRecipe(id: number) {
    this.recipe = this.recipeService.getRecipeByIndex(id);
    console.log(id, this.recipe);
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
