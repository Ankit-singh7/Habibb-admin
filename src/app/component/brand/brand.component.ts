import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ItemService } from 'src/app/service/item/item.service';
declare var $;


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  public brandList = [];
  public detail:any;
  public brandName:string;
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
    this.getAllBrand()
  }



  getAllBrand = () => {
    this.ui.loader.show()
    this.itemService.getBrandList().subscribe((res) => {
      if(res.data) {
        this.brandList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getBrandDetail = (id) => {
    this.itemService.getBrandDetail(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }

   deleteBrand = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Brand?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.itemService.deleteBrand(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Brand Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.brandList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addBrand = () => {
    this.ui.loader.show()
    const data = {
     name: this.brandName
     }
     this.brandList.push(data)
     this.itemService.addBrand(data).subscribe((res) => {
      this.brandName = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Brand Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllBrand()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editBrand = (id) => {
    this.ui.loader.show()
    this.itemService.editBrand(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllBrand()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.brandList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
