import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }
  async createCompany(form:any){
    const company :any = form.value 
    return  await this.companyService.putCompany(company)
    .then(()=> {alert('Succesfully Added.')
  window.location.reload();
  })
    .catch((err)=>{console.log(err)})
  }
}
