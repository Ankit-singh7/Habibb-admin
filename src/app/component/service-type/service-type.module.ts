import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTypeRoutingModule } from './service-type-routing.module';
import { ServiceTypeComponent } from './service-type.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ServiceTypeComponent],
  imports: [
    CommonModule,
    ServiceTypeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ServiceTypeModule { }
