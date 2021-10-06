import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }


  // Ingredient category api

  getIngredientCategoryList = (perPage?:number,currentPage?:number): Observable<any> => {
    return this.http.get(`${environment.apiURL}/ingredientCat/view/all?per_page=${perPage}&current_page=${currentPage}`)
  }

  createIngredientCategory = (data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/ingredientCat/create`,data)
  }

  deleteIngredientCategory = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/ingredientCat/${id}/delete`)
  }

  updateIngredientCategory = (id,data): Observable<any> => {
    return this.http.put(`${environment.apiURL}/ingredientCat/${id}/update`, data)
  }

  getSingleIngredientCategory = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/ingredientCat/${id}/getById`)
  }

  // END


  // Unit api

  getUnitList = (): Observable<any> => {
    return this.http.get(`${environment.apiURL}/unit/view/all`)
  }

  createUnit = (data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/unit/create`,data)
  }

  deleteUnit = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/unit/${id}/delete`)
  }

  updateUnit = (id,data): Observable<any> => {
    return this.http.put(`${environment.apiURL}/unit/${id}/update`, data)
  }

  getSingleUnit = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/unit/${id}/getById`)
  }

  // END


  // Ingredient List api

  getIngredientList = (perPage?:number,currentPage?:number): Observable<any> => {
    return this.http.get(`${environment.apiURL}/ingredient/view/all?per_page=${perPage}&current_page=${currentPage}`)
  }

  createIngredient = (data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/ingredient/create`,data)
  }

  deleteIngredient = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/ingredient/${id}/delete`)
  }

  updateIngredient = (id,data): Observable<any> => {
    return this.http.put(`${environment.apiURL}/ingredient/${id}/update`, data)
  }

  getSingleIngredient = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/ingredient/${id}/getById`)
  }

  // END

  // Food category api

  getFoodCategoryList = (perPage?:number,currentPage?:number): Observable<any> => {
    return this.http.get(`${environment.apiURL}/category/view/all?per_page=${perPage}&current_page=${currentPage}`)
  }

  createFoodCategory = (data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/category/create`,data)
  }

  deleteFoodCategory = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/category/${id}/delete`)
  }

  updateFoodCategory = (id,data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/category/${id}/update`, data)
  }

  getSingleFoodCategory = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/category/${id}/getById`)
  }

  getFoodListByCategory = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/category/${id}/getSubCatList`)
  }
  // END

  //Food List api

  getFoodList = (perPage?:number,currentPage?:number): Observable<any> => {
    return this.http.get(`${environment.apiURL}/subcategory/view/all?per_page=${perPage}&current_page=${currentPage}`)
  }

  createFood = (data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/subcategory/create`,data)
  }

  deleteFood = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/subcategory/${id}/delete`)
  }

  updateFood = (id,data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/subcategory/${id}/update`, data)
  }

  getSingleFoodDetail = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/subcategory/${id}/getById`)
  }

  // Food Ingredient api

  getFoodIngredientList = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/food-ingredient/view/${id}/all`)
  }

  createFoodIngredient = (data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/food-ingredient/create`,data)
  }

  deleteFoodIngredient = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/food-ingredient/${id}/delete`)
  }

  updateFoodIngredient = (id,data): Observable<any> => {
    return this.http.put(`${environment.apiURL}/food-ingredient/${id}/update`, data)
  }

  getSingleFoodIngredient = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/food-ingredient/${id}/getById`)
  }
  // END


  // Ingredient Report api

  getAllReport = (perPage?:number,currentPage?:number,paramObj?:any):Observable<any> => {
    return this.http.get(`${environment.apiURL}/report/view/all?per_page=${perPage}&current_page=${currentPage}&${paramObj}`)
  }


  // Sales Report api
  getAllSalesReport = (paramObj?:any):Observable<any> => {
    return this.http.get(`${environment.apiURL}/sales-report/view/all?${paramObj}`)
  }

  // Stock Api
    // Stock api

    addStockIn = (data):Observable<any> => {
      return this.http.post(`${environment.apiURL}/stock-in/create`,data)
    }
  
    showStockInList = (perPage?:number,currentPage?:number):Observable<any> => {
      return this.http.get(`${environment.apiURL}/stock-in/view/all?per_page=${perPage}&current_page=${currentPage}`)
    }
  
    addStockOut = (data):Observable<any> => {
      return this.http.post(`${environment.apiURL}/stock-out/create`,data)
    }
  
    showStockOutList = (perPage?:number,currentPage?:number):Observable<any> => {
      return this.http.get(`${environment.apiURL}/stock-out/view/all?per_page=${perPage}&current_page=${currentPage}`)
    }

    resetStock = (): Observable<any> => {
      return this.http.get(`${environment.apiURL}/ingredient/status`)
    }
  



  
}
