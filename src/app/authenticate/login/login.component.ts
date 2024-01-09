import { Component, inject } from '@angular/core';
import { RecipeModule } from '../../recipe/recipe.module';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { LoginModel } from '../login-model';
import { AuthenticateService } from '../authenticate.service';
import { TokenService } from '../../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RecipeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[AuthenticateService]
})
export class LoginComponent {
  formBuilder:FormBuilder=inject(FormBuilder);
  authenticationService:AuthenticateService=inject(AuthenticateService);
  tokenService:TokenService=inject(TokenService);
  router:Router=inject(Router);

  loginForm:FormGroup=this.formBuilder.group({
    email:[''],
    password:['']
  })
  login(){
    this.authenticationService.login(this.loginForm.value).subscribe(r=>{
      this.tokenService.login(r);
      this.router.navigate(["/main"]);
    })
  }
}
