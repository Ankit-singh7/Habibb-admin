import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';


@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    BranchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BranchModule { }
