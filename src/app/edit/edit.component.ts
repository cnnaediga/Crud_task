import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from '../supplier/supplier.model';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  data:any;
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
    private route:ActivatedRoute,
    private router: Router,
    private DataService:DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();

  }
  
  getData(){
    this.DataService.getOneSuppliers(this.id).subscribe(res=>{
    this.data=res;
    this.supplier = this.data;
    this.selectedHobby = this.supplier.hobby.split(",");
    })
  }

  updateSupplier(){
    this.supplier.hobby = this.selectedHobby.toString();
    this.DataService.updateSupplier(this.id,this.supplier).subscribe(res=>{
      this.router.navigate(['/'])
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
