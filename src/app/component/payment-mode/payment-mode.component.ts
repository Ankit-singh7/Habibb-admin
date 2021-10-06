import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ModeService } from 'src/app/service/mode/mode.service';
declare var $;

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.css']
})
export class PaymentModeComponent implements OnInit {

  public modeList = [];
  public detail:any;
  public paymentName:string;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  constructor(
    private router: Router,
    private modeService: ModeService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllPaymentMode()
  }



  getAllPaymentMode = () => {
    this.ui.loader.show()
    this.modeService.getPaymentModeList().subscribe((res) => {
      if(res.data) {
        this.modeList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getPaymentModeDetail = (id) => {
    this.modeService.getPaymentModeDetail(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }

   deleteMode = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Payment Mode?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.modeService.deletePaymentMode(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Payment Mode Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.modeList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addMode = () => {
    this.ui.loader.show()
    const data = {
     name: this.paymentName
     }
     this.modeList.push(data)
     this.modeService.createPaymentMode(data).subscribe((res) => {
      this.paymentName = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Payment Mode Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllPaymentMode()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editMode = (id) => {
    this.ui.loader.show()
    this.modeService.updatePaymentMode(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllPaymentMode()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.modeList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
