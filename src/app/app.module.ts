import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './components/usercomponents/add-user/add-user.component';
import { UserListComponent } from './components/usercomponents/user-list/user-list.component';
import { UserDetailsComponent } from './components/usercomponents/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/usercomponents/edit-user/edit-user.component';
import { AddCompanyComponent } from './components/companycomponents/add-company/add-company.component';
import { CompanyListComponent } from './components/companycomponents/company-list/company-list.component';
import { EditCompanyComponent } from './components/companycomponents/edit-company/edit-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { environment } from 'src/environments/environment';

const CLIENT_ID = environment.CLIENT_ID;
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    UserDetailsComponent,
    LoginComponent,
    EditUserComponent,
    AddCompanyComponent,
    CompanyListComponent,
    EditCompanyComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    
  ],
  providers: [ 
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(CLIENT_ID),
        },
      ],
    } as SocialAuthServiceConfig,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
