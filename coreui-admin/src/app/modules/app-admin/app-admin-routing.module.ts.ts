import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCaseComponent } from '../civilsuite/new-case/new-case.component';
import { AppAdminComponent } from './app-admin.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RoleNewComponent } from './roles/role-new/role-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'App Admin'
    },
    children: [
      {
        path: 'dashboard',
        component: AppAdminComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'roles',
        data: {
          title: 'Roles'
        },
        children: [
          {
            path: '',
            component: RoleListComponent,
            data: {
              title: 'List'
            }
          },
          {
            path: 'new',
            component: RoleNewComponent,
            data: {
              title: 'New'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule {
}