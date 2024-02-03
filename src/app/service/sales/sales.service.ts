import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }


  getAllProductSalesReport = (paramObj?:any):Observable<any> => {
    return this.http.get(`${environment.apiURL}/product-sales-report/view/all?${paramObj}`)
  }

  getAllServiceSalesReport = (paramObj?:any):Observable<any> => {
    return this.http.get(`${environment.apiURL}/service-sales-report/view/all?${paramObj}`)
  }

  getYearWiseSalesReport = (year, paramObj?:any):Observable<any> => {
    return this.http.get(`${environment.apiURL}/product-sales-report/view/yearly-month-wise?year=${year}&${paramObj}`)
  }
  
}
