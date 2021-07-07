import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/Ingredient";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('name', {static: true}) nameInput : ElementRef | undefined;
  @ViewChild('amount', {static: true}) amountInput : ElementRef | undefined;
  @Output() addIngredient : EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  submitIngredient() {
    const ingredient : Ingredient = new Ingredient(this.nameInput?.nativeElement.value, this.amountInput?.nativeElement.value)
    this.addIngredient.emit(ingredient);
  }

}
