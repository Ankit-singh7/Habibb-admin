import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ItemService } from 'src/app/service/item/item.service';
declare var $;


@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements OnInit {
  public ServiceTypeList = [];
  public detail:any;
  public serviceTypeName:string;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllServiceType()
  }



  getAllServiceType = () => {
    this.ui.loader.show()
    this.itemService.getServiceTypeList().subscribe((res) => {
      if(res.data) {
        this.ServiceTypeList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getServiceTypeDetail = (id) => {
    this.itemService.getServiceTypeDetail(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }

   deleteServiceType = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Service?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.itemService.deleteServiceType(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Service Type Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.ServiceTypeList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addServiceType = () => {
    this.ui.loader.show()
    const data = {
     name: this.serviceTypeName
     }
     this.ServiceTypeList.push(data)
     this.itemService.addService(data).subscribe((res) => {
      this.serviceTypeName = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Service Type Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllServiceType()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editServiceType = (id) => {
    this.ui.loader.show()
    this.itemService.editServiceType(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllServiceType()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.ServiceTypeList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
