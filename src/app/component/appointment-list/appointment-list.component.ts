import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import * as moment from 'moment';
import { FoodService } from 'src/app/service/food/food.service';
declare var $;
import swal from 'sweetalert2';
import { SalesService } from 'src/app/service/sales/sales.service';
import { UserService } from 'src/app/service/user/user.service';
import { BranchService } from 'src/app/service/branch/branch.service';
import { BillingService } from 'src/app/service/billing/billing.service';

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
  field: any;
  
  constructor(private router: Router,
    private ui: LoaderService,
    private billingService: BillingService ) { }
  
  ngOnInit(): void {
    this.getAppointmentList()
  }


  getAppointmentList() {
 

    this.billingService.getAppointmentList().subscribe((res) => {
      if(res.data) {
        this.appointmentList = res.data.result
      } else {
        this.appointmentList = [];
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

