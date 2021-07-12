import {Component, Input, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {Recipe} from "../Recipe.model";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe : Recipe | undefined
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe) => {
        this.recipe = recipe;
      }
    )
  }

}
