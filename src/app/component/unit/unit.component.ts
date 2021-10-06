import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
declare var $;

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  public unitList = [];
  public detail:any;
  public unitName:string;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  constructor(
    private router: Router,
    private foodService: FoodService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllUnit()
  }



  getAllUnit = () => {
    this.ui.loader.show()
    this.foodService.getUnitList().subscribe((res) => {
      if(res.data) {
        this.unitList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getUnitDetail = (id) => {
    this.foodService.getSingleUnit(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }

   deleteUnit = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Unit?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.foodService.deleteUnit(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Unit Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.unitList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addUnit = () => {
    this.ui.loader.show()
    const data = {
     name: this.unitName
     }
     this.unitList.push(data)
     this.foodService.createUnit(data).subscribe((res) => {
      this.unitName = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Unit Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllUnit()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editUnit = (id) => {
    this.ui.loader.show()
    delete this.detail.validationToken
    delete this.detail.createdOn
    delete this.detail.ingredient_category_id
    this.foodService.updateUnit(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllUnit()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.unitList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
