import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ItemService } from 'src/app/service/item/item.service';
declare var $;

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public ServiceTypeList = [];
  public ServiceList = [];
  public detail:any;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  selectedServiceType;
  serv = '';


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;
  serviceName: any;
  used: any;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllServiceType()
    this.getAllService()
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

  getAllService = () => {
    this.ui.loader.show()
    this.itemService.getServiceList().subscribe((res) => {
      if(res.data) {
        this.ServiceList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getServiceDetail = (id) => {
    this.itemService.getServiceDetail(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }



   deleteService = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Service?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.itemService.deleteService(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Service Type Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.ServiceList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addService = () => {
    this.ui.loader.show()
    const data = {
     name: this.serviceName,
     service_type_id: this.selectedServiceType,
     mostly_used: this.used
     }
     this.ServiceList.push(data)
     this.itemService.addService(data).subscribe((res) => {
      this.serviceName = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Service Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllService()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editService = (id) => {
    this.ui.loader.show()
    this.itemService.editService(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllService()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.ServiceList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
