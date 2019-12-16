import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
private messageSource = new BehaviorSubject(true);
loginStatus = this.messageSource.asObservable();
constructor() { }
changeLogginValue(value: boolean) {
  this.messageSource.next(value);
}

}
