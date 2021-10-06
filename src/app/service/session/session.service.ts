import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessionList(perPage?:number,currentPage?:number,paramObj?:any): Observable<any>{
    return this.http.get(`${environment.apiURL}/session/view/all?per_page=${perPage}&current_page=${currentPage}&${paramObj}`)
  }
}
