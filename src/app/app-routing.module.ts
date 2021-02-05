import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {
    path:'',
    component:SupplierComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }