import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private HttpClient:HttpClient
  ) { }
  getSuppliers(){
    return  this.HttpClient.get('http://127.0.0.1:8000/api/supplier')
  }

  insertData(data:object){
    return  this.HttpClient.post('http://127.0.0.1:8000/api/supplier',data)
  }
  deleteData(id:number){
     return this.HttpClient.delete('http://127.0.0.1:8000/api/supplier/'+id);
  }

  getOneSuppliers(id:number){
    return this.HttpClient.get('http://127.0.0.1:8000/api/supplier/'+id+'/edit');
 }
 updateSupplier(id:number,data:object){
  return this.HttpClient.put('http://127.0.0.1:8000/api/supplier/'+id,data);
}
}
