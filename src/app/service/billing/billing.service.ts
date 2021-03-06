import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

   getBillingList(perPage?:number,currentPage?:number,paramObj?:any): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/view/all?per_page=${perPage}&current_page=${currentPage}&${paramObj}`)
   }
   getCustomerList(name): Observable<any> {
    return this.http.get(`${environment.apiURL}/bill/customer?customer_name=${name}`)
  }
  getNumberList(number): Observable<any> {
    return this.http.get(`${environment.apiURL}/bill/number?customer_phone=${number}`)
  }
   deleteBill(id): Observable<any>{
     return this.http.delete(`${environment.apiURL}/bill/${id}`)
   }
   editBill(id,data): Observable<any> {
     return this.http.put(`${environment.apiURL}/bill/${id}/update`,data)
   }
   getBillDetail(id): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/${id}/getById`)
   }
   getTotalSale(paramObj?:any): Observable<any> {
     return this.http.get(`${environment.apiURL}/bill/total?${paramObj}`)
   }
}
