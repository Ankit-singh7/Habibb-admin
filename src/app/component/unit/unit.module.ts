import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitRoutingModule } from './unit-routing.module';
import { UnitComponent } from './unit.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UnitComponent],
  imports: [
    CommonModule,
    FormsModule,
    UnitRoutingModule
  ]
})
export class UnitModule { }
