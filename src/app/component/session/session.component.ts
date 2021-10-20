import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { BillingService } from 'src/app/service/billing/billing.service';
import { UserService } from 'src/app/service/user/user.service';
import { SessionService } from 'src/app/service/session/session.service';
declare var $;

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {



public name: any[] = [];
public field: string;
public sortOrder = false;
public sortFields = {
  user_name:true,
  session_amount: true,
  drawer_balance:true,
  withdrawn: true
};

public fullName = localStorage.getItem('name')
public sessionList = [];
public firstName: string;
public lastName: string;
public email:string;
public password: string;
public phone: string;
public status: string;
public response = 'No Data to Show';
public detail:any;
public selectedUserName: any;
public selectedDate:any;
public userNameList:any = [];
public total: any;


selectedPerPage = 10;
currentpage: number = 1;
totalPage: number;



@ViewChild('closeEditModal') closeEditModal: ElementRef;


constructor(private router: Router,
            private sessionService: SessionService,
            private billService: BillingService,
            private userService: UserService,
            private ui: LoaderService ) { }

ngOnInit(): void {
  this.getSessionList()
  this.getAllOperator()
  this.getTotalSales()
}


addStatus(val){
  this.status = val
  console.log(this.status);
}

editStatus(val){
  this.detail.status = val
  console.log(this.status);
}




getAllOperator = () => {
  this.userService.getAllOperator().subscribe((res) => {
    if(res.data) {
      let tempArr = res.data.result.map((item) => ({
        id: item.user_id,
        name: `${item.f_name} ${item.l_name}`
      }))
      let obj = {id:'',name:'All'}
      this.userNameList = [obj,...tempArr]
     }
  })
}

getTotalSales = () => {
  let data = {
    startDate:  moment(new Date()).format('DD-MM-YYYY'),
    endDate: moment(new Date()).format('DD-MM-YYYY'),
   }
   let filterStr = '';
   for (let item in data) {
      if(data[item]) {
        filterStr = `${filterStr}${item}=${data[item]}&`
      }
      }
   console.log(filterStr)
   this.billService.getTotalSale(filterStr).subscribe((res) => {
    if(res.data) {
      let totalArr = res.data;
      this.total = 0

      for(let i of totalArr) {
        this.total = this.total + i.total
      }
      console.log(this.total);
    } else {
      this.total = 0;
    }
  })
}



getSessionList(page?:number) {
  if(page) {
    this.currentpage = page
   }
   let data = {
    createdOn: this.selectedDate,
    user_name: this.selectedUserName
   }
   let filterStr = '';
   for (let item in data) {
      if(data[item]) {
        filterStr = `${filterStr}${item}=${data[item]}&`
      }
      }
   console.log(filterStr)
  this.ui.loader.show()
  this.sessionService.getSessionList(this.selectedPerPage,this.currentpage,filterStr).subscribe((res) => {
    if(res.data) {
      this.sessionList = res.data.result.map((item) => ({
           date: moment(item.createdOn).format('YYYY-MM-DD'),
           ...item
      }))
      this.totalPage = res.data.total
      if(res.data?.result) {
      
        this.total = 0
        for(let item of res.data.result) {
           this.total = this.total + item.drawer_balance
        }
      } else {
        this.total = 0;
      }
    } 
    this.ui.loader.hide()
  },(err) => this.ui.loader.hide())
}


onOptionSelect(option, val) {
  if(option === 'user') {
    if(val === 'All') {
      this.selectedUserName = ''
     } else {
       this.selectedUserName = val
     }
  } else if(option === 'date') {
    this.selectedDate = val
  }
  this.getSessionList()
}

onLimitSelect = (val) => {
  this.selectedPerPage = val
  this.getSessionList()
}



public changeOrder(field) {
  this.sortOrder = !this.sortOrder;
  this.field = field;
  this.sortFields[field] = this.sortOrder;
  this.sessionList.sort((a, b) => {
    if (field === 'withdrawn' || field === 'session_amount' || field === 'drawer_balance') {
      return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
    } else {
      return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
    }
  });
}



onUserSelect(val){
  this.selectedUserName = val;
  if(this.selectedUserName === 'CLEAR SEARCH') {
    this.selectedUserName = ''
  }
}

changedDate(e) {
  console.log(e)
}





logout = () => {
  localStorage.setItem('isLoggedIn', String(false));
  this.router.navigate(['/login']);
}

}
