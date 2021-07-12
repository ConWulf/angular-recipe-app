import {Component, Input, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {Recipe} from "../../Recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem : Recipe | undefined;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onShowDetails() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
