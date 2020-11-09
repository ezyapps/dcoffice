import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GeoDistrict } from '../models/geo-district.model';
import { GeoDivision } from '../models/geo-division.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  baseUrl = environment.apiUrl + 'districts/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<GeoDistrict[]> {
    return this.http.get<GeoDistrict[]>(this.baseUrl + 'withparent');
  }

  save(model: any): Observable<GeoDistrict> {
    return this.http.post<GeoDistrict>(this.baseUrl, model);
  }
}
