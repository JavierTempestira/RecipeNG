import { NgFor, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IRecipe } from "src/app/interfaces/recipe.interface";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ]
})
export class CardComponent {
  @Input() recipe!: IRecipe;
}
