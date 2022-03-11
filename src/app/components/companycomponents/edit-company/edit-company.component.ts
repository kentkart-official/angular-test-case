import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  company: any = ""; 
  id:any = 0;
  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService,
    private router: Router) { 
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id']
     
    })
    this.getCompany(parseInt(this.id))
     
  }

  ngOnInit(): void {
   
  }
  async getCompany(id:any){
    this.company = await this.companyService.getCompany(id)
    console.log(this.company)
  }
  async editCompany(company:any){
   
    console.log(company);
    await this.companyService.putCompany(company).then(()=>{
      this.router.navigate(['companies'])
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
