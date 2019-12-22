import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Designation } from '../modules/user/models/designation';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  baseUrl = environment.apiUrl + 'designation/';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Designation[]> {
    return this.http.get<Designation[]>(this.baseUrl);
  }
  save(model) {
    this.http.post(this.baseUrl, model);
  }
}
