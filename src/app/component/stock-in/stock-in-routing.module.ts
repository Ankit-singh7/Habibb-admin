import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockInComponent } from './stock-in.component';


const routes: Routes = [
  {path:'', component: StockInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockInRoutingModule { }
