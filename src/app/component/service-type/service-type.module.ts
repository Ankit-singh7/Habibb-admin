import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTypeRoutingModule } from './service-type-routing.module';
import { ServiceTypeComponent } from './service-type.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ServiceTypeComponent],
  imports: [
    CommonModule,
    ServiceTypeRoutingModule,
    FormsModule
  ]
})
export class ServiceTypeModule { }
