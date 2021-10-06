import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientReportComponent } from './ingredient-report.component';


const routes: Routes = [{
  path:'', component: IngredientReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientReportRoutingModule { }
