import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ItemService } from 'src/app/service/item/item.service';
declare var $;

@Component({
  selector: 'app-service-product-list',
  templateUrl: './service-based-product-list.component.html',
  styleUrls: ['./service-based-product-list.component.css']
})
export class ServiceBasedProductListComponent implements OnInit {
  public brandList = [];
  public productList = [];
  public detail:any;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  selectedBrand;
  public unitList = [
    { name: 'Gram', value: 'g' },
    { name: 'Milligram', value: 'mg' },
    { name: 'Milliliter', value: 'ml' },
    { name: 'Liter', value: 'L' },
    { name: 'Pack', value: 'P'}
  ];


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;
  productName: any;
  uom: any;
  prod = '';

  constructor(
    private router: Router,
    private itemService: ItemService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllBrand()
    this.getAllProduct()

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

  getAllUnit = () => {
    this.ui.loader.show()
    this.itemService.getBrandList().subscribe((res) => {
      if(res.data) {
        this.brandList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }

  getAllProduct = () => {
    this.ui.loader.show()
    this.itemService.getServiceBasedProductList().subscribe((res) => {
      if(res.data) {
        this.productList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getProductDetail = (id) => {
    this.itemService.getServiceBasedProductDetail(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }



   deleteProduct = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Product?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.itemService.deleteServiceBasedProduct(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Product Type Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.productList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addProduct = () => {
    this.ui.loader.show()
    const data = {
     name: this.productName,
     brand_id: this.selectedBrand,
     uom: this.uom
     }
     this.productList.push(data)
     this.itemService.addServiceBasedProduct(data).subscribe((res) => {
      this.productName = '';
      this.selectedBrand = '';
      this.uom = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Product Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllProduct()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editProduct = (id) => {
    this.ui.loader.show()
    this.itemService.editServiceBasedProduct(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllProduct()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.productList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }



}
