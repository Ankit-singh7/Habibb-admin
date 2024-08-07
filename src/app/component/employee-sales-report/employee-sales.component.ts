import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { BillingService } from 'src/app/service/billing/billing.service';
import { UserService } from 'src/app/service/user/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { map, switchMap, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ModeService } from 'src/app/service/mode/mode.service';
import { BranchService } from 'src/app/service/branch/branch.service';




@Component({
  selector: 'app-employee-sales',
  templateUrl: './employee-sales.component.html',
  styleUrls: ['./employee-sales.component.css']
})
export class EmployeeSalesComponent implements OnInit {



  public field: string;
  public sortOrder = false;
  public selectAll = false;
  public oldBranchId: string;
  public LoadingText = 'abc';
  public sortFields = {
    total_price:true,
    payment_mode:true,
    delivery_mode:true,
    customer_name:true,
    user_name:true,
    createdOn: true
  };
  public payment = [];
  public delivery = [];
  // const debouncetime = pipe(debounceTime(1000));
  
  @ViewChild('yourElement') yourElement: ElementRef;
  @ViewChild('yourNumber') yourNumber: ElementRef;

  public billList = [];
  public firstName: string;
  public lastName: string;
  public email:string;
  public password: string;
  public phone: string;
  public status: string;
  public response = 'No Data to Show';
  public detail:any;
  public selectedPaymentMode:any;
  public selectedBranchId:any;
  public searchedName = '';
  public selectedDate = '';
  public searchedNumber;
  public userNameList:any = [];
  public total: any;
  public branchList = [];
  public operatorList = [];
  public employeeList = [];
  public customerList = [];
  public selectedOperator;
  public selectedEmployee;
  


  selectedPerPage = 10000;
  currentpage: number = 1;
  totalPage: number;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  
  selectedStartDate: any;
  selectedEndDate: any;


  constructor(private router: Router,
              private billService: BillingService,
              private userService: UserService,
              private modeService: ModeService,
              private fb:FormBuilder,
              private branchService: BranchService,
              private ui: LoaderService ) { 
              }

  ngOnInit(): void {
    this.getBillList()
    this.getAllPaymentMode()
    this.getAllOperator()
    this.getAllBranch()
    this.getAllEmployee();
  }


  onCustomerChange(){
   console.log(this.searchedName)
  }

  ngAfterViewInit(): void {
    fromEvent(this.yourElement.nativeElement, 'input')
      .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(data => {
           this.searchedName = data.toLowerCase()
           if(this.searchedName) {

            this.getCustomerList()
          }
          

      });

  }




  getAllPaymentMode = () => {
    this.modeService.getPaymentModeList().subscribe((res) => {
      if(res.data) {
        this.payment.push({id:'Net Banking', name: 'Net Banking'})
        let tempArr = res.data.map((item) => ({
           id: item.payment_mode_name,
           name: item.payment_mode_name
        }))
        this.payment = [...tempArr, ...this.payment]
        this.payment.push({id:'',name:'All'})
        
      } 
    })
  }



  // getAllDeliveryMode = () => {
  //   this.modeService.getDeliveryModeList().subscribe((res) => {
  //     if(res.data) {
  //       this.delivery = res.data.map((item) => ({
  //          id: item.delivery_mode_name,
  //          name: item.delivery_mode_name
  //       }))
  //       this.delivery.push({id:'',name:'All'})
  //     } 
  //   })
  // }

  getAllOperator = () => {
    this.userService.getAllOperator('',10000,1).subscribe((res) => {
      if(res.data) {
        let tempArr = res.data.result.map((item) => ({
          id: item.user_id,
          name: `${item.f_name} ${item.l_name}`
        }))
        let obj = {id:'',name:'All'}
        this.operatorList = [obj,...tempArr]
       }
    })
  }

  getAllEmployee = () => {
    this.userService.getAllEmployee('status=Active',10000,1).subscribe((res) => {
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



  addStatus(val){
    this.status = val
    console.log(this.status);
  }

  editStatus(val){
    this.detail.status = val
    console.log(this.status);
  }






  getBillList(page?:number) {
    
    if(page) {
      this.currentpage = page
     }
    let data = {
      startDate:  moment(this.selectedStartDate).format('DD-MM-YYYY'),
      endDate: moment(this.selectedEndDate).format('DD-MM-YYYY'),
      payment_mode: this.selectedPaymentMode,
      branch_id: this.selectedBranchId,
      createdOn: this.selectedDate,
      user_id: this.selectedOperator,
      customer_name: this.searchedName,
      customer_phone: this.searchedNumber,
      employee_id: this.selectedEmployee
     }
     let filterStr = '';
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
    this.ui.loader.show()
    this.billService.getBillingList(this.selectedPerPage,this.currentpage,filterStr).subscribe((res) => {
      this.billList = [];
      if(res.data) {
        let listData = []
        let updatedArray = []
        listData = res.data.result.map((item) => ({
             date: moment(item.createdOn).format('YYYY-MM-DD'),
             services: [...item.services],
             products: [...item.products],
             total_price: item.total_price
        }))
        console.log(listData)
        for(let item of listData) {
          if(item.services.length>0) {
            for(let s of item.services) {
              let obj = {
                employee_name: s.employee_name,
                quantity: s.quantity,
                type: 'service',
                s_name: s.service_name,
                price: s.total
              }

              updatedArray.push(obj)

            }
          }
          if(item.products.length>0) {
            for(let s of item.products) {
              let obj = {
                employee_name: s.employee_name,
                quantity: s.quantity,
                type: 'product',
                p_name: s.product_name,
                price: s.total
              }

              updatedArray.push(obj)

            }
          }
        }

        let temp_array = JSON.parse(JSON.stringify(updatedArray))
        this.billList = temp_array.reduce((items,item)=> {
          let itemIndex = items.findIndex((i) => i.employee_name === item.employee_name)
          if(itemIndex === -1) {
            if(item.type === 'service') {
                item.service_quantity = item.quantity
                item.product_quantity = 0
                item.total_price = item.price
                item.s_price = item.price
                item.p_price = 0
                delete item.quantity
                delete item.type
                delete item.price
                items.push(item);
            } 
            if(item.type === 'product') {
              item.product_quantity = item.quantity
              item.service_quantity = 0
              item.s_price = 0
              item.total_price = item.price
              item.p_price = item.price
              delete item.quantity
              delete item.type
              delete item.price
              items.push(item);
          }
          } else {
            if(items[itemIndex].service_quantity && item.type === 'service') {
               items[itemIndex].total_price += item.price
               items[itemIndex].service_quantity +=  item.quantity
               items[itemIndex].s_price = `${items[itemIndex].s_price} + ${item.price}`
               items[itemIndex].s_name = `${items[itemIndex].s_name},${item.s_name}`
            } else if(items[itemIndex].product_quantity && item.type === 'product') {
              items[itemIndex].total_price += item.price
              items[itemIndex].product_quantity +=  item.quantity
              items[itemIndex].p_price = `${items[itemIndex].p_price} + ${item.price}`
              items[itemIndex].p_name = `${items[itemIndex].p_name},${item.p_name}`
            } else if(!items[itemIndex].service_quantity && item.type === 'service') {
              items[itemIndex].total_price += item.price
              items[itemIndex].service_quantity =  item.quantity
              items[itemIndex].s_price = item.price
              items[itemIndex].s_name =  item.s_name
            } else if(!items[itemIndex].product_quantity && item.type === 'product') {
              items[itemIndex].total_price += item.price
              items[itemIndex].product_quantity =  item.quantity
              items[itemIndex].p_price = item.price
              items[itemIndex].p_name =  item.p_name
            } 
          }

          return items;

        },[])
        console.log('bill', this.billList)
        this.total = this.billList.reduce((acc,curr) => {
            return acc + curr.total_price;
        },0)
        
        if(res.data.result.length>0) {
        
          this.totalPage = (res.data.total).split('-')[1];
          console.log(this.totalPage)
        }
      } else {
        this.total = 0;
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getCustomerList() {
    this.billService.getCustomerList(this.searchedName).subscribe((res) => {
      this.customerList = [];
      if(res.data) {
        this.billList = res.data.result.map((item) => ({
             date: moment(item.createdOn).format('YYYY-MM-DD'),
             ...item
        }))
        this.total = (res.data.total).split('-')[0];

        
        if(res.data.result.length>0) {
        
          this.totalPage = (res.data.total).split('-')[1];
          console.log(this.totalPage)
        }
      } else {
        this.total = 0;
      } 
    })
  }
  


  onOptionSelect(option, val) {
      if(option === 'payment') {
        this.selectedPaymentMode = val
      } else if(option === 'branch') {
        this.selectedBranchId = val
      } else if(option === 'operator') {
        if(val === 'ALL') {
          this.selectedOperator = ''
         } else {
           this.selectedOperator = val
         }
      }else if(option === 'employee') {
        if(val === 'ALL') {
          this.selectedEmployee = ''
         } else {
           this.selectedEmployee = val
         }
      } else if(option === 'date') {
        this.selectedDate = val
      }
      this.getBillList()
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
      this.getBillList()
    }
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


  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getBillList()
  }



  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.billList.sort((a, b) => {
      if (field === 'total_price') {
        return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
      } else {
        return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
  }


  deleteBill(index,id) {
    swal.fire({
      title: 'Do you want to delete this Bill?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.billService.deleteBill(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Bill Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          this.getBillList()
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
  }

  getBillDetail(id) {
    this.ui.loader.show()
    this.billService.getBillDetail(id).subscribe((res) => {
       if(res.data) {
         this.detail = res.data
         this.ui.loader.hide()
       }
    },err => this.ui.loader.hide())
  }

  editBill(id){
    this.ui.loader.show()
   delete this.detail.validationToken
   delete this.detail.createdOn
   this.billService.editBill(id, this.detail).subscribe((res) => {
    this.closeEditModal.nativeElement.click();
    this.detail = {};
    this.ui.loader.hide()
    this.getBillList()
   },err => {
    this.ui.loader.hide()
   })
    
  }









}
