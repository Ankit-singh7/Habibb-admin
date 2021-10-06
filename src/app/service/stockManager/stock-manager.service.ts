import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockManagerService {


  constructor(private http: HttpClient) { }


  getSMList(perPage?:number,currentPage?:number):Observable<any>{
    return this.http.get(`${environment.apiURL}/sm/view/all?per_page=${perPage}&current_page=${currentPage}`);
  }

  addSM(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/sm/signup`,data);
  }

  deleteSM(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/sm/${id}/delete`)
  }

  getSMDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/sm/${id}/details`)
  }

  editSMDetail(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/sm/${id}/edit`, data)
  }
}
