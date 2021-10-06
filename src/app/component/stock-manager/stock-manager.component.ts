import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { StockManagerService } from 'src/app/service/stockManager/stock-manager.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
declare var $;

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {

  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public employeeList = [];
  public firstName: string;
  public lastName: string;
  public email:string;
  public password: string;
  public phone: string;
  public status: string;
  public detail:any;

  selectedPerPage = 10;
  currentpage: number = 1;
  total: number;

  @ViewChild('closeEditModal') closeEditModal: ElementRef;

  constructor(private router: Router,
              private stockManagerService: StockManagerService,
              private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getEmployeesList()
  }



  addStatus(val){
    this.status = val
    console.log(this.status);
  }

  editStatus(val){
    this.detail.status = val
    console.log(this.status);
  }


  getEmployeesList(page?:number) {
    this.ui.loader.show()
    if(page) {

      this.currentpage = page
    }
    this.stockManagerService.getSMList(this.selectedPerPage,this.currentpage).subscribe((res) => {
      if(res.data) {
        this.employeeList = res.data.result
        this.total = res.data.total
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getEmployeesList()
  }


  addEmployee(){
    this.ui.loader.show()
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNumber: this.phone,
      email: this.email,
      password: this.password,
      status: this.status
     }
     this.employeeList.push(data)
     this.stockManagerService.addSM(data).subscribe((res) => {
       this.firstName = ''
       this.lastName = ''
       this.phone = ''
       this.email = ''
       this.password = ''
       this.status = ''
       swal.fire({
        icon: 'success',
        title: 'Stock Manager Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
       this.ui.loader.hide()
     },err => this.ui.loader.hide())
  }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.employeeList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  deleteEmployee(index,id) {
    swal.fire({
      title: 'Do you want to delete this Stock Manager?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.stockManagerService.deleteSM(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'User Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.employeeList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
  }

  getEmployeeDetail(id) {
    this.stockManagerService.getSMDetail(id).subscribe((res) => {
       if(res.data) {
         this.detail = res.data
       }
    })
  }

  editEmployee(id){
    this.ui.loader.show()
   delete this.detail.validationToken
   delete this.detail.createdOn
   this.stockManagerService.editSMDetail(id, this.detail).subscribe((res) => {
    this.closeEditModal.nativeElement.click();
    this.detail = {};
    this.ui.loader.hide()
    this.getEmployeesList()
   },err => {
    this.ui.loader.hide()
   })
    
  }







  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
