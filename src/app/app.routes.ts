import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'auth',loadComponent:()=>import("./authenticate/authenticate.component").then(c=>c.AuthenticateComponent),loadChildren:()=>import('./authenticate/auth.routes').then(r=>r.routes),canActivate:[authGuard]},
    {path:'main',loadComponent:()=>import("./main/main.component").then(c=>c.MainComponent),loadChildren:()=>import('./main/main.routes').then(r=>r.routes),canActivate:[authGuard]},
    {path:'**',redirectTo:'auth'},
];
