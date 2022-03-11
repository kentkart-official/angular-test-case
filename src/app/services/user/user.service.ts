import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dbCon } from '../../commonlibs/dbcon';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private dbService: dbCon) { 
    this.dbService.createTables();
  
  }
  async getUser(key:number) : Promise<any> {
    return await this.dbService.getData('users', key);
  }
  async getAll()  {
    return await this.dbService.getAllData('users');
  }
  async putUser(data: any) : Promise<any> {
    return await this.dbService.putData('users', data)
  }
  async deleteUser(key: number){
    return await this.dbService.deleteData('users', key)
  }
}

