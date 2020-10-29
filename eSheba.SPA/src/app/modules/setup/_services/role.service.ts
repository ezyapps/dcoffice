import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl = environment.apiUrl + 'roles';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl);
  }
  save(model) {
    return this.http.post(this.baseUrl, model)
      .pipe(
        map((response: any) => {
          console.log(response);
          if (response != null) {
            return 'New designation has been created successfully';
          } else {
            return 'Sorry! Something went wrong. Please try again later';
          }
        }
      )
    );
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '?id=' + id).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      })
    );
  }
  edit(model) {
    console.log(model);
    return this.http.put(this.baseUrl, model).pipe(
      map((response: any ) => {
        console.log('Edit response: ' + response);
        return response;
      })
    );
  }

}
