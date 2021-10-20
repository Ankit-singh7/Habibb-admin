import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ItemService } from 'src/app/service/item/item.service';
declare var $;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public brandList = [];
  public productList = [];
  public detail:any;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  selectedBrand;


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;
  productName: any;
  used: any;
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

  getAllProduct = () => {
    this.ui.loader.show()
    this.itemService.getProductList().subscribe((res) => {
      if(res.data) {
        this.productList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getProductDetail = (id) => {
    this.itemService.getProductDetail(id).subscribe((res) => {
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
        this.itemService.deleteProduct(id).subscribe((res) => {
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
     mostly_used: this.used
     }
     this.productList.push(data)
     this.itemService.addProduct(data).subscribe((res) => {
      this.productName = '';
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
    this.itemService.editProduct(id, this.detail).subscribe((res) => {
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
