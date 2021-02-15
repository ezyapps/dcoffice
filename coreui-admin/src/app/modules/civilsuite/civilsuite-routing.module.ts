import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { CaseListComponent } from './components/case-list/case-list.component';
import { CivilsuiteDashboardComponent } from './components/civilsuite-dashboard/civilsuite-dashboard.component';
import { NewCaseComponent } from './components/new-case/new-case.component';
import { CaseDetailsResolver } from './resolvers/case-details.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'দেওয়ানি মামলা'
    },
    children: [
      {
        path: 'dashboard',
        component: CivilsuiteDashboardComponent,
        data: {
          title: 'ড্যাশবোর্ড'
        }
      },
      {
        path: 'new-case',
        component: NewCaseComponent,
        data: {
          title: 'নতুন মামলা'
        }
      },
      {
        path: 'caselist',
        component: CaseListComponent,
        data: {
          title: 'মামলার তালিকা'
        }
      },
      {
        path: 'casedetails',
        component: CaseDetailsComponent,
        data: {
          title: 'মামলার বিস্তারিত'
        }
      },
      {
        path: 'casedetails/:caseNo',
        component: CaseDetailsComponent,
        resolve: {caseDetails: CaseDetailsResolver},
        data: {
          title: 'মামলার বিস্তারিত'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CivilSuiteRoutingModule {}
