import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockManagerComponent } from './stock-manager.component';


const routes: Routes = [
  {path:'', component: StockManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockManagerRoutingModule { }
