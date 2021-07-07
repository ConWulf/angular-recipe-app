import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListEditComponent } from './shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
