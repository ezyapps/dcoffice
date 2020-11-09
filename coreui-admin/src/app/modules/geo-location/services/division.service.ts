import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GeoDivision } from '../models/geo-division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  baseUrl = environment.apiUrl + 'divisions/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<GeoDivision[]> {
    return this.http.get<GeoDivision[]>(this.baseUrl);
  }

  save(model: any): Observable<GeoDivision> {
    return this.http.post<GeoDivision>(this.baseUrl, model);
  }
}
