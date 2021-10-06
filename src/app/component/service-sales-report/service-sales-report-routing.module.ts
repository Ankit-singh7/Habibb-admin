import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceSalesReportComponent } from './service-sales-report.component';


const routes: Routes = [
  {
    path:'',
    component: ServiceSalesReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceSalesReportRoutingModule { }
