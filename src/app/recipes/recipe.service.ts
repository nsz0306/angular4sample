import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Goaty Dragon',
            'Komodo Dragon attacks poor goat',
            'https://i.redditmedia.com/flUeRIMQGtB_GMG558wbEZhqHxXk1j26ybt_EwAZmK8.jpg?w=900&s=cc14d6994ecb1e14f50b5b8792e0b52f',
            [
                new Ingredient('Goat', 1),
                new Ingredient('Dragon', 2)
            ]
        ),
        new Recipe(
            'Black Shark',
            'The shark reminded me of a fabulous meal we had in Haiti back in the 70s...',
            'https://cookinginsens.files.wordpress.com/2012/08/img_0287b.jpg',
            [
                new Ingredient('Shark', 5),
                new Ingredient('BlackHole', 1),
            ]
        )
      ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}