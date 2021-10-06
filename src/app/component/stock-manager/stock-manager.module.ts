import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockManagerRoutingModule } from './stock-manager-routing.module';
import { StockManagerComponent } from './stock-manager.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [StockManagerComponent],
  imports: [
    CommonModule,
    StockManagerRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class StockManagerModule { }
