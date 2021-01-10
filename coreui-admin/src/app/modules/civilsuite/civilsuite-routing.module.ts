import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseListComponent } from './components/case-list/case-list.component';
import { CivilsuiteDashboardComponent } from './components/civilsuite-dashboard/civilsuite-dashboard.component';
import { NewCaseComponent } from './components/new-case/new-case.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CivilSuiteRoutingModule {}
