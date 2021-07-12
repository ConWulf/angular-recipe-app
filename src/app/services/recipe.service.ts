import { Injectable } from '@angular/core';
import {Recipe} from "../recipes/Recipe.model";
import {Ingredient} from "../shared/Ingredient";
import {EventEmitter} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private _recipeSelected : EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('burger',
      'a simple hamburger',
      'assets/img/pexels-engin-akyurt-3219547.jpg',
      [new Ingredient('beef', 0.5)])
  ];
  constructor() { }


  get recipes(): Recipe[] {
    return this._recipes;
  }

  set recipes(value: Recipe[]) {
    this._recipes = value;
  }

  get recipeSelected(): EventEmitter<Recipe>{
    return this._recipeSelected;
  }
  set recipeSelected(value: EventEmitter<Recipe>) {
    this._recipeSelected = value;
  }

}
