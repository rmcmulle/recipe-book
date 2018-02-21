import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Chicken Pot Pie", "Flaky and delicious", "https://images-gmi-pmc.edge-generalmills.com/dc6d7f7a-1dc1-49c2-8d3e-16758204849a.jpg"),
    new Recipe("Chocolate Cake", "Moist and rich", "http://www.terrakulture.com/restnew/wp-content/uploads/2017/04/chocolate-cake-300x287.jpg")
  ]; // array of Recipes

  constructor() { }

  ngOnInit() {
  }

}
