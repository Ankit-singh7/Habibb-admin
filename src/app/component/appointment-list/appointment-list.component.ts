import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { BillingService } from 'src/app/service/billing/billing.service';
import { BranchService } from 'src/app/service/branch/branch.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointmentList = [];
  public sortFields = {
    customer_name:true,
    booking_amount: true,
    payment_mode:true,
    createdOn: true,
    appointment_date: true,
    appointment_time: true,
    purpose: true
  };
  public sortOrder = false;
  public selectedBranchId:any;
  field: any;
  public branchList = [];
  
  constructor(
    private router: Router,
    private billingService: BillingService,
    private branchService: BranchService,
    private ui: LoaderService ) { }
  
  ngOnInit(): void {
    this.getAppointmentList()
    this.getAllBranch();
  }

  getAllBranch = () => {
    this.branchService.getBranchList().subscribe((res) => {
      if(res.data) {
        let tempArr = res.data.map((item) => ({
          id: item.branch_id,
          name: item.branch_name
        }))
        let obj = {id:'',name:'All'}
        this.branchList = [obj,...tempArr]

      }
    })
  }

  onOptionSelect(val) {
      this.selectedBranchId = val
    this.getAppointmentList()
}

  getAppointmentList() {
    this.ui.loader.show()
    let data = {
      branch_id: this.selectedBranchId,
     }
     let filterStr = '';
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
    this.billingService.getAppointmentList(filterStr).subscribe((res) => {
      if(res.data) {
        this.appointmentList = res.data.result
        this.ui.loader.hide();
      } else {
        this.appointmentList = [];
        this.ui.loader.hide();
      }
    })
  }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.appointmentList.sort((a, b) => {
      if (field === 'booking_amount') {
        return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
      } else {
        return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
  }

    
  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }
  

}

