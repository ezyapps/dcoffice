import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CrudService } from '../../../common/_services/crud.service';
import { NewCivilCase } from '../models/new-case.model';

@Injectable({
  providedIn: 'root'
})
export class CivilCaseService extends CrudService<NewCivilCase, string> {

  baseUrl = environment.apiUrl + 'civilcase';
  constructor(protected _http: HttpClient) {
    super(_http, `${environment.apiUrl}civilcase`);
  }

  getAll(parentCode): Observable<NewCivilCase[]> {
    return this._http.get<NewCivilCase[]>(this.baseUrl + '/withparent/' + parentCode);
  }

}
