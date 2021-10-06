import { Component, OnInit, ElementRef, ViewChild, ResolvedReflectiveFactory } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.css']
})
export class StockInComponent implements OnInit {

  public subId:any;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public ingredientList = [];
  public mainIngrdientList = [];
  public unitList = [];
  public categoryList = [];
  public stockInList = [];
  public firstName: string;
  public lastName: string;
  public email:string;
  public password: string;
  public phone: string;
  public status: string;
  public detail:any;
  public quantity: string;
  public selectedCategory: string;
  public selectedUnit: string;
  public selectedIngredient:any;

  selectedPerPage = 10;
  currentpage: number = 1;
  total: number;



  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;


  constructor(
    private router: Router,
    private stockService: FoodService,
    private route: ActivatedRoute,
    private ui: LoaderService ) { 

    }

  ngOnInit(): void {
    this.getStockInList()
    this.getIngredientList()
    this.getAllCategory()
    this.getAllUnit()
  }


  getAllUnit = () => {

    this.stockService.getUnitList().subscribe((res) => {
      if(res.data) {
        this.unitList = res.data
      } 

    },(err) => {
      console.log(err)
    })
  }

  getAllCategory = () => {
     this.stockService.getIngredientCategoryList(500,1).subscribe((res) => {
       if(res.data) {
         this.categoryList = res.data.result        
       }
     },(err) => {
      console.log(err)
    })
  }

  getIngredientList = () => {
    this.stockService.getIngredientList(500,1).subscribe((res) => {
      if(res.data) {
        this.ingredientList = res.data.result
        this.mainIngrdientList = res.data.result

      }
    },(err) => {
      console.log(err)
    })
  }

 getStockInList = (page?:number) => {
   this.ui.loader.show()
  if(page) {

    this.currentpage = page
  }
  this.stockService.showStockInList(this.selectedPerPage,this.currentpage).subscribe((res) => {
    if(res.data) {
      this.stockInList = res.data.result
      this.total = res.data.total
    }
    this.ui.loader.hide()
  },err => this.ui.loader.hide())
 }

 onLimitSelect = (val) => {
  this.selectedPerPage = val
  this.getStockInList()
}




  getIngredientDetail = (id) => {
    this.stockService.getSingleFoodIngredient(id).subscribe((res) => {
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
        this.stockService.deleteFoodIngredient(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Ingredient Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.stockInList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addIngredient = () => {
    this.ui.loader.show()
    const data = {
     category_id: this.selectedIngredient.category_id,
     unit_id: this.selectedIngredient.unit_id,
     ingredient_id: this.selectedIngredient.ingredient_id,
     quantity: this.quantity
     }
     this.stockService.addStockIn(data).subscribe((res) => {
      this.closeAddModal.nativeElement.click();
      this.quantity = '';
      this.selectedUnit = '';
      this.selectedCategory = '';
      this.selectedIngredient = '';
       swal.fire({
        icon: 'success',
        title: 'Stock Data Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getStockInList()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editIngredient = (id) => {
    this.ui.loader.show()
    delete this.detail.validationToken
    delete this.detail.createdOn
    this.stockService.updateFoodIngredient(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getStockInList()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.stockInList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  getSelectedIngredient(val) {
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
