import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../../../common/_services/alertify.service';
import { CivilCaseService } from '../services/civilcase.service';

@Injectable()
export class CaseDetailsResolver implements Resolve<any>
{
  /**
   *
   */
  constructor(
    private twister: AlertifyService,
    private router: Router,
    private caseService: CivilCaseService
  ) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.caseService.findOne(route.params['id']).pipe(
      catchError(error => {
          this.twister.error('Problem retrieving data');
          this.router.navigate(['/caselist']);
          return of(null);
      })
  );
  }

}
