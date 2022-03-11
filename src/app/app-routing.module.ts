import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {AddUserComponent} from './components/usercomponents/add-user/add-user.component';
import { EditUserComponent } from './components/usercomponents/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/usercomponents/user-details/user-details.component';
import {UserListComponent} from './components/usercomponents/user-list/user-list.component';
import { AuthGuardService as AuthGuard, AuthGuardService } from './services/authentication/auth-guard.service';
import { AddCompanyComponent } from './components/companycomponents/add-company/add-company.component';
import { CompanyListComponent } from './components/companycomponents/company-list/company-list.component';
import { EditCompanyComponent } from './components/companycomponents/edit-company/edit-company.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path: 'users', component: UserListComponent },
  {path: 'adduser', component: AddUserComponent, canActivate:[AuthGuardService]},
  {path: 'users/details/:id', component:UserDetailsComponent},
  {path: 'users/edit/:id', component:EditUserComponent, canActivate:[AuthGuardService]},
  {path:'companies',component:CompanyListComponent},
  {path:'addcompany', component:AddCompanyComponent ,canActivate:[AuthGuardService] },
  {path:'companies/edit/:id', component:EditCompanyComponent, canActivate:[AuthGuardService]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
