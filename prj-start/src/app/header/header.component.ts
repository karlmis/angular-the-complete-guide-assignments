import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Output() recipeEmitter = new EventEmitter<boolean>();

  setRecipes() {
    this.recipeEmitter.emit(true);
  }

  setShoppingList() {
    this.recipeEmitter.emit(false);
  }
}
