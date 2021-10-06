import { Component, OnInit, ElementRef, ViewChild, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public ingredientList = [];
  public unitList = [];
  public categoryList = [];
  public firstName: string;
  public lastName: string;
  public email:string;
  public password: string;
  public phone: string;
  public status: string;
  public detail:any;
  public ingredientName: string;
  public selectedCategory: string
  public selectedUnit: string;

  selectedPerPage = 10;
  currentpage: number = 1;
  total: number;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;


  constructor(
    private router: Router,
    private foodService: FoodService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllCategory()
    this.getAllUnit()
    this.getIngredientList()
  }


  getAllUnit = () => {

    this.foodService.getUnitList().subscribe((res) => {
      if(res.data) {
        this.unitList = res.data
      } 

    },(err) => {
      console.log(err)
    })
  }

  getAllCategory = () => {
     this.foodService.getIngredientCategoryList(500,1).subscribe((res) => {
       if(res.data) {
         this.categoryList = res.data.result
       }
     },(err) => {
      console.log(err)
    })
  }

  getIngredientList = (page?:number) => {
    this.ui.loader.show()
    if(page) {

      this.currentpage = page
    }
    this.foodService.getIngredientList(this.selectedPerPage,this.currentpage).subscribe((res) => {
      if(res.data) {
        this.ingredientList = res.data.result
        this.total = res.data.total;
      }
      this.ui.loader.hide()
    },(err) => {
      this.ui.loader.hide()
      console.log(err)
    })
  }

  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getIngredientList()
  }

  resetStock = () => {
    this.ui.loader.show()
    this.foodService.resetStock().subscribe((res) => {
     this.ui.loader.hide()
     this.getIngredientList()
    },err => {
      this.ui.loader.hide()
    })
  }




  getIngredientDetail = (id) => {
    this.foodService.getSingleIngredient(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
        console.log(this.detail)
        
      }
   })
  }

   deleteIngredient = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Ingredient?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.foodService.deleteIngredient(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Ingredient Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.ingredientList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addIngredient = () => {
    this.ui.loader.show()
    const data = {
     category_id: this.selectedCategory,
     unit_id: this.selectedUnit,
     name: this.ingredientName
     }
     this.foodService.createIngredient(data).subscribe((res) => {
      this.closeAddModal.nativeElement.click();
      this.ingredientName = '';
      this.selectedUnit = '';
      this.selectedCategory = '';
       swal.fire({
        icon: 'success',
        title: 'Ingredient Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getIngredientList()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editIngredient = (id) => {
    this.ui.loader.show()
    delete this.detail.validationToken
    delete this.detail.createdOn
    delete this.detail.ingredient_id
    this.foodService.updateIngredient(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getIngredientList()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.ingredientList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  getSelectedCategory(val) {
    console.log(val);
  }

  getSelectedUnit(val) {
    console.log(val);
  }

  editStatus(val){
    this.detail.status = val
    console.log(this.status);
  }





  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }



}
