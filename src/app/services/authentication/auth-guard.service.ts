import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) { }

  canActivate(): boolean {
    if(!this.auth.isLoggedIn()){
      this.router.navigate(['login']);
      alert("You Have Not Logged In")
      return false;
    }
    return true;
  }
  isLoggedIn():boolean{
    return this.auth.isLoggedIn();
  }
}

