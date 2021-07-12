import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Recipe.model";
import {Ingredient} from "../../shared/Ingredient";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] | undefined;
  showDetails : boolean = false;
  recipe : Recipe | undefined;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }

display() : void {
  this.showDetails = !this.showDetails
}

}
