import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BrandComponent],
  imports: [
    CommonModule,
    BrandRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class BrandModule { }
