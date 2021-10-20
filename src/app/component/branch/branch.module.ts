import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    BranchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BranchModule { }
