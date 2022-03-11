import { Component, OnInit } from '@angular/core';
import { dbCon } from 'src/app/commonlibs/dbcon';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Repdata:any;
  constructor(private userService: UserService, private authenticationService:AuthenticationService ) { 
    
    var dbService :dbCon =new dbCon();
    this.userService = new UserService(dbService);
    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  IsLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }
  async getAllUsers(){
   return await this.userService.getAll()
    .then((data)=>{
      this.Repdata = data;
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  async deleteUser(userid:number){
    return await this.userService.deleteUser(userid)
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
