import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CrudService } from '../../../common/_services/crud.service';
import { RightGroup } from '../models/right-group.model';

@Injectable({
  providedIn: 'root'
})
export class RightGroupService extends CrudService<RightGroup, string> {

  baseUrl = environment.apiUrl + 'rightgroups';
  constructor(protected _http: HttpClient) {
    super(_http, `${environment.apiUrl}rightgroups`);
  }

  getAll(appCode): Observable<RightGroup[]> {
    return this._http.get<RightGroup[]>(this.baseUrl + '/byapplication/' + appCode);
  }

}
