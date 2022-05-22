import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DpDatePickerModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [FilterPipe]
})
export class CustomerModule { }
