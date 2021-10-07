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

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  public name: any[] = [];
  public field: string;
  public sortOrder = false;
  public sortFields = {
    quantity:true,
    food_name:true,
  };
  public reportList = [];
  public employeeList = [];
  public branchList = [];
  public response = 'No Data to Show';
  public selectedStartDate:any
  public selectedEndDate:any
  public total: any;


selectedPerPage = 10;
currentpage: number = 1;
totalPage: number;
  
  
  
  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  selectedEmployee: string;
  selectedBranchId: any;
  
  
  constructor(private router: Router,
    private salesService: SalesService,
    private userService: UserService,
    private branchService: BranchService,
    private ui: LoaderService ) { }
  
  ngOnInit(): void {
     this.getAllReport()
     this.getAllBranch()
     this.getAllEmployee()
  }



  getAllEmployee = () => {
    this.userService.getAllEmployee().subscribe((res) => {
      if(res.data) {
        let tempArr = res.data.result.map((item) => ({
          id: item.user_id,
          name: `${item.f_name} ${item.l_name}`
        }))
        let obj = {id:'',name:'All'}
        this.employeeList = [obj,...tempArr]
       }
    })
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

  onOptionSelect(option, val) {
     if(option === 'branch') {
      if(val === 'ALL') {
        this.selectedEmployee = ''
       } else {

         this.selectedBranchId = val
       }
    } else if(option === 'employee') {
      if(val === 'ALL') {
        this.selectedEmployee = ''
       } else {
         this.selectedEmployee = val
       }
    } 
    this.getAllReport()
  }
  
  

  

  
  
  getAllReport() {
   
    let data = {
      startDate:  moment(this.selectedStartDate).format('DD-MM-YYYY'),
      endDate:  moment(this.selectedEndDate).format('DD-MM-YYYY'),
      branch_id: this.selectedBranchId,
      employee_id: this.selectedEmployee
     }
     let filterStr = '';
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
    this.ui.loader.show()
    this.salesService.getAllServiceSalesReport(filterStr).subscribe((res) => {
      this.reportList = [];
      if(res.data.result) {
        let arr1 = JSON.parse(JSON.stringify(res.data.result))
        let keyArr = arr1.map((i) => i.service_id)
        console.log(keyArr)
       for(let i = 0; i< arr1.length;i++) {
        //  debugger
         let tempArr = arr1.filter((item) => item.service_id === arr1[i].service_id)
         console.log(tempArr)
         if(tempArr.length>1) {
           let newObj = JSON.parse(JSON.stringify(tempArr[0]))
           let quantity = 0;
           for(let j = 0; j<tempArr.length;j++) {
             quantity = quantity + tempArr[j].quantity
           }
           newObj.quantity = quantity;
           if(!this.reportList.some(item => item.service_id === newObj.service_id )) {

             this.reportList.push(Object.assign({}, newObj))
           } 
         } else {
           this.reportList.push(tempArr[0])
         }
       }
      //  this.totalPage = this.reportList.length;

     console.log(this.reportList)

      }
       this.ui.loader.hide()
    }, err => {
      this.ui.loader.hide()
    })
  }

  onDateSelect(){
    if(!this.selectedStartDate) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select Start Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else if(!this.selectedEndDate) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select End Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      // this.selectedStartDate = moment(this.selectedStartDate).format('DD-MM-YYYY')
      // this.selectedEndDate = moment(this.selectedEndDate).format('DD-MM-YYYY')
      this.getAllReport()
    }
  }

  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getAllReport()
  }
  
  

  
  
  

  
  
  
  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.reportList.sort((a, b) => {
      if (field === 'quantity' || field === 'quantity') {
        return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
      } else {
        return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
  }


  changedDate(date,val) {
    if(date === 'start'){
      this.selectedStartDate = val

    } else if(date === 'end') {
      this.selectedEndDate = val
    }
    console.log(this.selectedStartDate)
    console.log(this.selectedEndDate)
  }
  
    
  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }
  

}

