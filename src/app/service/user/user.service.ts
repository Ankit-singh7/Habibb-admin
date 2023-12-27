import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/user/login`, data);
  }

  public changePassword(data):Observable<any> {
    return this.http.post(`${environment.apiURL}/admin/forgotPassword`,data)
  }

  public getAllEmployee(paramStrng?:string, perPage?:number,currentPage?:number): Observable<any> {
    let str = paramStrng?paramStrng:'';
    return this.http.get(`${environment.apiURL}/user/e?per_page=${perPage}&current_page=${currentPage}&${str}`)
  }

  public getAllOperator(paramStrng?:string, perPage?:number,currentPage?:number): Observable<any> {
    let str = paramStrng?paramStrng:'';
    return this.http.get(`${environment.apiURL}/user/o?per_page=${perPage}&current_page=${currentPage}&${str}`)
  }


  public addEmployee(data): Observable<any>{
    return this.http.post(`${environment.apiURL}/user`, data)
  }

  public addOperator(data): Observable<any> {
    return this.http.post(`${environment.apiURL}/user`, data)
  }

  public editUser(id,data): Observable<any> {
    return this.http.put(`${environment.apiURL}/user/${id}`,data)
  }

  public deleteUser(id): Observable<any> {
    return this.http.delete(`${environment.apiURL}/user/${id}`)
  }


  public getUserDetail(id): Observable<any> {
    return this.http.get(`${environment.apiURL}/user/${id}`)
  }



  public getAllUsers(perPage?:number,currentPage?:number): Observable<any> {
    return this.http.get(`${environment.apiURL}/users/view/all?per_page=${perPage}&current_page=${currentPage}`)
  }


}
