import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/Ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients : Ingredient[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  add(e : Ingredient) {
    this.ingredients.push(e)
  }
}
