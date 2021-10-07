import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentListRoutingModule } from './appointment-list-routing.module';
import { AppointmentListComponent } from './appointment-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppointmentListRoutingModule
  ]
})
export class AppointmentListModule { }
