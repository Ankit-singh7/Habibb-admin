import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { OperatorComponent } from './operator.component';
import { OperatorRoutingModule } from './operator-routing.module';
import { UserService } from 'src/app/service/user/user.service';

@NgModule({
  declarations: [OperatorComponent],
  imports: [
    CommonModule,
    OperatorRoutingModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers:[UserService]
})
export class OperatorModule { }
