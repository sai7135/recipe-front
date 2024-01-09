import { Component } from '@angular/core';
import { RecipeModule } from '../../recipe/recipe.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
