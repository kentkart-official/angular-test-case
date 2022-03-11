import { openDB } from "idb";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root',
})

export class dbCon {

  async createTables() {
    await openDB('testCaseDB', 1, { upgrade(db) {
      db.createObjectStore('users', { keyPath: 'userid', autoIncrement: true })
      db.createObjectStore('companies', { keyPath: 'companyid', autoIncrement: true })
    }})
  }

  async putData(store: string, data: any) {
    const db = await openDB('testCaseDB', 1);

    let transaction = db.transaction(store, 'readwrite');
    transaction.store.put(data)
   return transaction.done
      .then(() => { return true; })
      .catch((err) => { return err; })
      .finally(() => { db.close() })
  }
  async getData(store: string,  key:number){
    const db = await openDB('testCaseDB', 1);
 
   return await db.transaction(store).objectStore(store).get(key)
  }
  async getAllData(store: any) {
    const db = await openDB('testCaseDB', 1);
    let transaction = db.transaction([store], 'readwrite');
    console.log(store)
    return transaction.objectStore(store).getAll().finally(()=>{
      db.close();
    });
      /*transaction.done
      .then((resData) => {
        return resData; 
      })
      .catch((err) => { 
        console.log(err)
        return err; })
      .finally(() => { db.close()})
*/
    
   
  }
  async deleteData(store: string, key: number) {
    const db = await openDB('testCaseDB', 1);

    let transaction = db.transaction(store, 'readwrite');
    transaction.store.delete(key)
    transaction.done
      .then(() => { return true; })
      .catch((err) => { return err; })
      .finally(() => { db.close() })
  }
}
