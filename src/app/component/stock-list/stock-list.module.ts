import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockListRoutingModule } from './stock-list-routing.module';
import { StockListComponent } from './stock-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [StockListComponent],
  imports: [
    CommonModule,
    StockListRoutingModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class StockListModule { }
