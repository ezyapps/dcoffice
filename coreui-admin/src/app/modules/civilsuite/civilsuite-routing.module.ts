import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      title: 'Civil Suite'
    },
    children: [
      {
        path: 'dashboard',
        component: CivilsuiteDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'new-case',
        component: NewCaseComponent,
        data: {
          title: 'New Case'
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
