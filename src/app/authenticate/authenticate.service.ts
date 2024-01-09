import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationResponse, RegistrationModel } from './login-model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticateService {

  constructor(private httpClient:HttpClient) { }

  signUp(signup:RegistrationModel):Observable<AuthorizationResponse>{
    return this.httpClient.post<AuthorizationResponse>("/auth/register",signup)
  }

  login(signup:RegistrationModel):Observable<AuthorizationResponse>{
    return this.httpClient.post<AuthorizationResponse>("/auth/signin",signup)
  }

}
