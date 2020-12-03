import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CrudService } from '../../../common/_services/crud.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<any, string> {

  baseUrl = environment.apiUrl + 'users';
  constructor(protected _http: HttpClient) {
    super(_http, `${environment.apiUrl}users`);
  }

  getMe(): Observable<any[]> {
    return this._http.get<any[]>(this.baseUrl + '/me');
  }

  getByNID(nid): Observable<any> {
    return this._http.get<any>(this.baseUrl + '/bynid/' + nid);
  }

  getByUserName(username): Observable<any> {
    return this._http.get<any>(this.baseUrl + '/byusername/' + username);
  }

  getByEmail(email): Observable<any> {
    return this._http.get<any>(this.baseUrl + '/byemail/' + email);
  }

}
