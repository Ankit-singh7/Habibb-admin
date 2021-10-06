import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesReportRoutingModule } from './product-sales-report-routing.module';
import { ProductSalesReportComponent } from './product-sales-report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductSalesReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductSalesReportRoutingModule
  ]
})
export class ProductSalesReportModule { }
