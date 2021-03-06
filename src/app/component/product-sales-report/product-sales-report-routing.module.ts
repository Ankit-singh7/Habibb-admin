import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSalesReportComponent } from './product-sales-report.component';


const routes: Routes = [
  {
    path:'',
    component: ProductSalesReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSalesReportRoutingModule { }
