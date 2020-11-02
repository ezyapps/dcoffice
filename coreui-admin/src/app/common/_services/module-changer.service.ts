import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleChangerService {
private subject = new Subject<any>();
constructor() { }

currentModule(moduleName: string) {
  this.subject.next(moduleName);
}

getChangedModuleName(): Observable<any>{
  return this.subject.asObservable();
}

}
