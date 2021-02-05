import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier.model';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  dataArr:any;
   files:any;
   selectedHobby:any = [];
   hobbyArr = [
     {
       "key":"Cricket",
       "value":"Cricket"
     },
     {
      "key":"Dance",
      "value":"Dance"
    }
    ]
   supplier = new Supplier();
  constructor(
    private DataService:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSuppliers();
  }
  getSuppliers(){
    this.DataService.getSuppliers().subscribe(res=>{ this.dataArr=res;
     })
  }
  insertData(){
    this.supplier.hobby = this.selectedHobby.toString();
    //console.log(this.selectedHobby.toString());
   this.DataService.insertData(this.supplier).subscribe(res=>{
     //console.log(res);
     
     this.router.navigate(['/']);
     //.getSuppliers();
   })
  }
  deleteData(id:number){
    this.DataService.deleteData(id).subscribe(res=>{
      //console.log(res);
      this.getSuppliers();
    })
  }
  hobbyChange(event:any){
    let index= this.selectedHobby.indexOf(event.target.value);
    if(index==-1){
    this.selectedHobby.push(event.target.value)
    } else {
      this.selectedHobby.splice(index,1);
    }
    //console.log(this.selectedHobby);
 }

}
