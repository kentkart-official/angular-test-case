import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any = ""; 
  id:any = 0;
  constructor(private activatedRoute: ActivatedRoute, private UserService:UserService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id']
     
    })
    this.getUser(parseInt(this.id))
     
  }

  ngOnInit(): void {
   
  }
  async getUser(id:any){
    this.user = await this.UserService.getUser(id)
    console.log(this.user)
  }


}
