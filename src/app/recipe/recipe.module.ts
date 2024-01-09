import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterModule } from '@angular/router';
import { HttpInterceptorService } from '../http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    StyleClassModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true}]
})
export class RecipeModule { }
