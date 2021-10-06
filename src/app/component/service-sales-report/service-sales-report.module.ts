import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceSalesReportRoutingModule } from './service-sales-report-routing.module';
import { ServiceSalesReportComponent } from './service-sales-report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ServiceSalesReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    ServiceSalesReportRoutingModule
  ]
})
export class ServiceSalesReportModule { }
