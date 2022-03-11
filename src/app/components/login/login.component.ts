import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser!: SocialUser;
  isLoggedin?: boolean;
  constructor(
    private authenticationService: AuthenticationService,
    private socialAuthService: SocialAuthService
  ) { this.isLoggedin = this.authenticationService.isLoggedIn() }
  ngOnInit() {
    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      localStorage.setItem('token', this.socialUser.authToken)
      console.log(this.socialUser);
    });
  }
  loginWithGoogle(): void {
    this.authenticationService.loginWithGoogle();    
  }
  logOut(): void {
    this.authenticationService.logOut();
  }
}
