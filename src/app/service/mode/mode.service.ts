import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  constructor(private http: HttpClient) { }

  // Payment apis

  getPaymentModeList = (): Observable<any> =>  {
    return this.http.get(`${environment.apiURL}/payment`)
  }

  createPaymentMode = (data): Observable<any> => {
    return this.http.post(`${environment.apiURL}/payment`,data)
  }

  getPaymentModeDetail = (id): Observable<any> => {
    return this.http.get(`${environment.apiURL}/payment/${id}`)
  }

  updatePaymentMode = (id,data): Observable<any> =>{
    return this.http.put(`${environment.apiURL}/payment/${id}`,data)
  }

  deletePaymentMode = (id): Observable<any> => {
    return this.http.delete(`${environment.apiURL}/payment/${id}`)
  }




}
