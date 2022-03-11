import { Component, OnInit} from '@angular/core';
import { dbCon } from 'src/app/commonlibs/dbcon';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) { 
    var dbService :dbCon =new dbCon();
    userService = new UserService(dbService);
  }

  async createUser(form:any){
    const user :any = form.value 
    return  await this.userService.putUser(user)
    .then(()=> {alert('Succesfully Added.')
    window.location.reload();
    })
    .catch((err)=>{console.log(err)})
  }
  ngOnInit(): void {

  }

}
