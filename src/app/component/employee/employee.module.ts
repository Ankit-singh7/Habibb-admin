import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
