import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BranchService {
  constructor(private http: HttpClient) { }


  getBranchList():Observable<any>{
    return this.http.get(`${environment.apiURL}/branch`);
  }

  addBranch(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/branch`,data);
  }

  deleteBranch(id): Observable<any> {
    return this.http.delete(`${environment.apiURL}/branch/${id}`)
  }

  getBranchDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/branch/${id}`)
  }

  editBranch(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/branch/${id}`, data)
  }
}
