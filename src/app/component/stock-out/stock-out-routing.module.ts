import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockOutComponent } from './stock-out.component';


const routes: Routes = [
  {path:'', component: StockOutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockOutRoutingModule { }
