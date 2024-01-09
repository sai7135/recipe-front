
import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router:Router=inject(Router);
  if(route.url[0].path=="auth"){
    if(!localStorage.getItem("AuthToken")){
      return true
    }
    else{
      router.navigate(['main']) 
    }
  }
  if(route.url[0].path=="main"){
    if(localStorage.getItem("AuthToken")){
      return true
    }
    else{
      router.navigate(['auth']) 
    }
  }
  return true;
};
