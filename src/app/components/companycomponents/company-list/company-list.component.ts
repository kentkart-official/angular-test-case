import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  Repdata:any;
  constructor(private companyService:CompanyService, private authenticationService:AuthenticationService) { 
    this.getAllCompanies();
  }

  ngOnInit(): void {
  }
  IsLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }
  async getAllCompanies(){
    return await this.companyService.getAll()
     .then((data)=>{
       this.Repdata = data;
     })
     .catch((err)=>{
       console.log(err)
     })
   }

  async deleteCompany(key:number){
    return await this.companyService.deleteCompany(key)
    .then(()=>{
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  logOut(): void {
    this.authenticationService.logOut();
  }

}
