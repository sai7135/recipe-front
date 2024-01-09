import { Component, inject } from '@angular/core';
import { RecipeModule } from '../recipe/recipe.module';
import { Router, RouterOutlet } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RecipeModule,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  tokenService:TokenService=inject(TokenService);
  router:Router=inject(Router);

  logout(){
    this.tokenService.logout();
    this.router.navigate(['/auth'])
  }
}
