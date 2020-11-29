import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
private subject = new Subject<any>();
constructor() { }

setActiveModule(moduleName: string) {
  this.subject.next(moduleName);
}

getActiveModuleName(): Observable<any> {
  return this.subject.asObservable();
}

}
