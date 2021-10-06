import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }


  getBrandList():Observable<any>{
    return this.http.get(`${environment.apiURL}/brand`);
  }

  addBrand(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/brand`,data);
  }

  deleteBrand(id): Observable<any> {
    return this.http.delete(`${environment.apiURL}/brand/${id}`)
  }

  getBrandDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/brand/${id}`)
  }

  editBrand(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/brand/${id}`, data)
  }

  


  // product-list

  getProductList():Observable<any>{
    return this.http.get(`${environment.apiURL}/product`);
  }

  addProduct(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/product`,data);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete(`${environment.apiURL}/product/${id}`)
  }

  getProductDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/product/${id}`)
  }

  editProduct(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/product/${id}`, data)
  }




  // service-type

  getServiceTypeList():Observable<any>{
    return this.http.get(`${environment.apiURL}/service-type`);
  }

  addServiceType(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/service-type`,data);
  }

  deleteServiceType(id): Observable<any> {
    return this.http.delete(`${environment.apiURL}/service-type/${id}`)
  }

  getServiceTypeDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/service-type/${id}`)
  }

  editServiceType(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/service-type/${id}`, data)
  }



  // service-list

  getServiceList():Observable<any>{
    return this.http.get(`${environment.apiURL}/service`);
  }

  addService(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/service`,data);
  }

  deleteService(id): Observable<any> {
    return this.http.delete(`${environment.apiURL}/service/${id}`)
  }

  getServiceDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/service/${id}`)
  }

  editService(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/service/${id}`, data)
  }


}
