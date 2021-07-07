import { Injectable } from '@angular/core';
import {Recipe} from "../recipes/Recipe.model";
import {Ingredient} from "../shared/Ingredient";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
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
}
