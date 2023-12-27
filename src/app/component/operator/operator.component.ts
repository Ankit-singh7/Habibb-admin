import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/service/branch/branch.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { UserService } from 'src/app/service/user/user.service';
import swal from 'sweetalert2';
declare var $;
import { fromEvent } from 'rxjs';
import { map, switchMap, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public operatorList = [];
  public branchList = [];
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
  selectedBranch:any;

  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  designation: any;
  @ViewChild('operatorName') operatorName: ElementRef;

  constructor(private router: Router,
              private userService: UserService,
              private branchService: BranchService,
              private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getOperatorList()
    this.getBranchList();
  }

  ngAfterViewInit(){
    fromEvent(this.operatorName.nativeElement, 'input')
    .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
    .pipe(debounceTime(1000))
    .pipe(distinctUntilChanged())
    .subscribe(data => {
        if(data) {

          this.firstName = this.titleCase(data)
        } else {
          this.firstName = '';
        }
          this.getOperatorList()

    });
  }

  titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
   return sentence;
 }



  addStatus(val){
    this.status = val
    console.log(this.status);
  }

  changeBranch(val){
    this.selectedBranch = val;
    console.log(val)
  }

  editStatus(val){
    this.detail.status = val
    console.log(this.status);
  }


  getOperatorList(page?:number) {
    this.ui.loader.show()


    if(page) {

      this.currentpage = page
    }

    let data = {
      f_name:  this.firstName
     
     }
     let filterStr = '';
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
     console.log(filterStr)
    this.userService.getAllOperator(filterStr, this.selectedPerPage, this.currentpage).subscribe((res) => {
      if(res.data) {
        this.operatorList = res.data.result
        this.total = res.data.total
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }

  getBranchList() {
    this.branchService.getBranchList().subscribe((res) => {
      if(res.data) {
        this.branchList = res.data
      } else {
        this.branchList = [];
      }
    })
  }

  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getOperatorList()
  }


  addOperator(){
    this.ui.loader.show()
    const data = {
      f_name: this.firstName,
      l_name: this.lastName,
      phone: this.phone,
      email: this.email,
      password: this.password,
      branch_id: this.selectedBranch,
      role: 'operator',
      status: this.status
     }
     this.operatorList.push(data)
     this.userService.addEmployee(data).subscribe((res) => {
       this.firstName = ''
       this.lastName = ''
       this.phone = ''
       this.email = ''
       this.password = ''
       this.status = ''
       swal.fire({
        icon: 'success',
        title: 'User Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
       this.ui.loader.hide()
     },err => this.ui.loader.hide())
  }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.operatorList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  deleteUser(index,id) {
    swal.fire({
      title: 'Do you want to delete this User?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.userService.deleteUser(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'User Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.operatorList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
  }

  getUserDetail(id) {
    this.userService.getUserDetail(id).subscribe((res) => {
       if(res.data) {
         this.detail = res.data
       }
    })
  }

  editUser(id){
    this.ui.loader.show()
   delete this.detail.validationToken
   delete this.detail.createdOn
   this.userService.editUser(id, this.detail).subscribe((res) => {
    this.closeEditModal.nativeElement.click();
    this.detail = {};
    this.ui.loader.hide()
    this.getOperatorList()
   },err => {
    this.ui.loader.hide()
   })
    
  }







  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }



}
