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
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public branchList = [];
  public startHour;
  public startMin;
  public startSlot;
  public endHour;
  public endMin;
  public endSlot;
  public data = {
    name:'',
    address:'',
    phone:'',
    branch_start_timing:'',
    branch_end_timing:'',
    branch_gst:'',
    footer_1:'',
    footer_2:'',
    footer_3:'',
    google_link:'',
    facebook_link:'',
  }
  public hours = [];
  public minutes = [];
  public phone: string;

  public detail:any;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  @ViewChild('branchName') branchName: ElementRef;
  designation: any;
  bname = '';

  constructor(private router: Router,
              private branchService: BranchService,
              private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getBranchList();
    this.generateHour();
    this.generateMin();
  }



  titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
   return sentence;
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


  public generateHour(){
     for (let i = 1; i<13; i++) {
       let obj = {key:i}
       this.hours.push(obj)
     }
  }

  public generateMin(){
     for(let i = 1; i<61;i++) {
       if(i === 60) {

         let obj = {key:'00'}
         this.minutes.push(obj)
       } else {
        let obj = {key:i}
        this.minutes.push(obj)
       }
     }
  }

  public changeStartHour(val) {
    console.log(val)
    this.startHour = val
  }

  public changeStartMin(val) {
    console.log(val)
    this.startMin = val
  }

  public changeStartSlot(val) {
     console.log(val)
     this.startSlot = val
  }


  public changeEndHour(val) {
    console.log(val)
    this.endHour = val
  }

  public changeEndMin(val) {
    console.log(val)
    this.endMin = val
  }

  public changeEndSlot(val) {
     console.log(val)
     this.endSlot = val
  }





  addBranch(){
    this.ui.loader.show()
      this.data.branch_start_timing = `${this.startHour}:${this.startMin} ${this.startSlot}`
      this.data.branch_end_timing = `${this.endHour}:${this.endMin} ${this.endSlot}`
      this.branchList.push(this.data)

      this.branchService.addBranch(this.data).subscribe((res) => {
      this.data.name = '';
      this.data.address = '';
      this.data.phone = '';
      this.data.branch_start_timing = '';
      this.data.branch_end_timing = '';
      this.data.branch_gst = '';
      this.data.footer_1 = '';
      this.data.footer_2 = '';
      this.data.footer_3 = '',
      this.data.google_link = '';
      this.data.facebook_link = '';
       swal.fire({
        icon: 'success',
        title: 'Branch Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
       this.ui.loader.hide()
     },err => this.ui.loader.hide())
  }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.branchList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  deleteBranch(index,id) {
    swal.fire({
      title: 'Do you want to delete this Branch?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.branchService.deleteBranch(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Branch Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.branchList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
  }

  getBranchDetail(id) {
    this.branchService.getBranchDetail(id).subscribe((res) => {
       if(res.data) {
         this.detail = res.data
         let tempStartArr = res.data.branch_start_timing.split(/[:' ']+/)
         this.detail.startHour = tempStartArr[0]
         this.detail.startMin = tempStartArr[1]
         this.detail.startSlot = tempStartArr[2]
         let tempEndArr = res.data.branch_end_timing.split(/[:' ']+/)
         this.detail.endHour = tempEndArr[0]
         this.detail.endMin = tempEndArr[1]
         this.detail.endSlot = tempEndArr[2]
         console.log(tempStartArr)
       }
    })
  }

  editBranch(id){
    this.ui.loader.show()
   delete this.detail.validationToken
   delete this.detail.createdOn
   this.detail.branch_start_timing = `${this.detail.startHour}:${this.detail.startMin} ${this.detail.startSlot}`
   this.detail.branch_end_timing = `${this.detail.endHour}:${this.detail.endMin} ${this.detail.endSlot}`
  
         delete this.detail.startHour 
         delete this.detail.startMin 
         delete this.detail.startSlot 
       
         delete this.detail.endHour 
         delete this.detail.endMin 
         delete this.detail.endSlot
   this.branchService.editBranch(id, this.detail).subscribe((res) => {
    this.closeEditModal.nativeElement.click();
    this.detail = {};
    this.ui.loader.hide()
    this.getBranchList()
   },err => {
    this.ui.loader.hide()
   })
    
  }







  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }



}
