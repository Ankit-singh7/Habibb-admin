import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { SharedModule } from '../shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BillingRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DpDatePickerModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [FilterPipe]
})
export class BillingModule { }
