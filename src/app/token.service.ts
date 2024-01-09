import { Injectable } from '@angular/core';
import { AuthorizationResponse } from './authenticate/login-model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  login(response:AuthorizationResponse){
    localStorage.setItem("AuthToken",response.jwtToken);
    localStorage.setItem("Expiration",response.expiration);
  }

  logout(){
    localStorage.clear();
  }
}
