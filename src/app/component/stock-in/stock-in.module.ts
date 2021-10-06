import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockInRoutingModule } from './stock-in-routing.module';
import { StockInComponent } from './stock-in.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StockInComponent],
  imports: [
    CommonModule,
    StockInRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class StockInModule { }
