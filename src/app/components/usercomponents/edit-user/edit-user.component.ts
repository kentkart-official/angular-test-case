import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any = ""; 
  id:any = 0;
  constructor(private activatedRoute: ActivatedRoute, private UserService:UserService,
    private router: Router) { 
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
  async editUser(user:any){
   
    console.log(user);
    await this.UserService.putUser(user).then(()=>{
      this.router.navigate(['users/details',user.userid])
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
