import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';


@NgModule({
  declarations: [BrandComponent],
  imports: [
    CommonModule,
    BrandRoutingModule,
    FormsModule
  ]
})
export class BrandModule { }
