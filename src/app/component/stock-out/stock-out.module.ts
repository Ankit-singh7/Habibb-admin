import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockOutRoutingModule } from './stock-out-routing.module';
import { StockOutComponent } from './stock-out.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StockOutComponent],
  imports: [
    CommonModule,
    StockOutRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class StockOutModule { }
