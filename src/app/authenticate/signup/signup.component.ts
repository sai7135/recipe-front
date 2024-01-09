import { Component, inject } from '@angular/core';
import { RecipeModule } from '../../recipe/recipe.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { AuthorizationResponse } from '../login-model';
import { TokenService } from '../../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RecipeModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers:[AuthenticateService]
})
export class SignupComponent {
  
  formBuilder:FormBuilder=inject(FormBuilder);
  authService:AuthenticateService=inject(AuthenticateService);
  tokenService:TokenService=inject(TokenService);
  router:Router=inject(Router);

  signUpForm:FormGroup=this.formBuilder.group({
    email:[''],
    password:[''],
    confirmPassword:['']
  })
  signUp(){
    this.authService.signUp(this.signUpForm.value).subscribe((r:AuthorizationResponse)=>{
      this.tokenService.login(r);
      this.router.navigate(["/main"]);
    });
  }
}
