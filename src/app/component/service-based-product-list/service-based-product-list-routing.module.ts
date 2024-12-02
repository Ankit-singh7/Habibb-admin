import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceBasedProductListComponent } from './service-based-product-list.component';


const routes: Routes = [
  {
    path: '',
    component: ServiceBasedProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceBasedProductListRoutingModule { }
