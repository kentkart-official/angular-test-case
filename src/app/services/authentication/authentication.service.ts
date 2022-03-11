import { Injectable } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private socialAuthService: SocialAuthService) {}
  
  public isLoggedIn(): boolean {
    return !! localStorage.getItem('token')
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);  
  }

  logOut(): void {
    this.socialAuthService.signOut();
    localStorage.removeItem('token');
  }
}
