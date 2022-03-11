import { Injectable } from '@angular/core';
import { dbCon } from '../../commonlibs/dbcon';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private dbService: dbCon) { }
  async getCompany(key:number) : Promise<any> {
    return await this.dbService.getData('companies', key);
  }
  async getAll()  {
    return await this.dbService.getAllData('companies');
  }
  async putCompany(data: any) : Promise<any> {
    return await this.dbService.putData('companies', data)
  }
  async deleteCompany(key: number){
    return await this.dbService.deleteData('companies', key)
  }
}
