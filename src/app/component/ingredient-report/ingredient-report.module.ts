import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientReportRoutingModule } from './ingredient-report-routing.module';
import { IngredientReportComponent } from './ingredient-report.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [IngredientReportComponent],
  imports: [
    CommonModule,
    IngredientReportRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class IngredientReportModule { }
