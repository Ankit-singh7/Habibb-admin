import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceBasedProductListRoutingModule } from './service-based-product-list-routing.module';
import { ServiceBasedProductListComponent } from './service-based-product-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ServiceBasedProductListComponent],
  imports: [
    CommonModule,
    ServiceBasedProductListRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ServiceBasedProductListModule { }
