import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getEmployeeList(perPage?:number,currentPage?:number):Observable<any>{
    return this.http.get(`${environment.apiURL}/users/view/all?per_page=${perPage}&current_page=${currentPage}`);
  }

  addEmployee(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/users/signup`,data);
  }

  deleteEmployee(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/users/${id}/delete`)
  }

  getEmployeeDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/users/${id}/details`)
  }

  editEmployeeDetail(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/users/${id}/edit`, data)
  }
}
