import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Recipe.model";
import {Ingredient} from "../../shared/Ingredient";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('burger',
      'a simple hamburger',
      'assets/img/pexels-engin-akyurt-3219547.jpg',
      [new Ingredient('beef', 0.5)])
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
