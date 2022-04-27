import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(this.editItemIndex);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editedItem) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
      this.onClear();
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.editItemIndex = -1;
    this.editedItem =  null;
  }

  onDelete() {
    if (!this.editMode) {
      return;
    }
    this.shoppingListService.removeIngredient(this.editItemIndex);
    this.onClear();
  }
}
