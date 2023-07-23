import { Component } from '@angular/core';
import { IRecipe } from './interfaces/recipe.interface';
import { RecipeService } from './services/recipe.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
recipes: IRecipe[] = [];
isLoading: boolean = false;
ingredients: string = '';

constructor(private recipeService: RecipeService) {
  this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
}

async generateRecipe() {
  this.isLoading = true;
  if (this.ingredients.length > 10) {
    await this.recipeService.generateRecipe(this.ingredients);
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }
  this.isLoading = false;
}


}
