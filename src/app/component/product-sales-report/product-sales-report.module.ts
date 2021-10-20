import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSalesReportRoutingModule } from './product-sales-report-routing.module';
import { ProductSalesReportComponent } from './product-sales-report.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductSalesReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductSalesReportRoutingModule,
    SharedModule
  ]
})
export class ProductSalesReportModule { }
