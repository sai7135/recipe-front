import { Component } from '@angular/core';
import { RecipeModule } from '../recipe/recipe.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [RecipeModule,RouterOutlet],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent {

}
