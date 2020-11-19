import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminComponent } from './app-admin.component';
import { RightGroupListComponent } from './components/right-group/right-group-list/right-group-list.component';
import { RoleListComponent } from './components/roles/role-list/role-list.component';
import { RoleNewComponent } from './components/roles/role-new/role-new.component';

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
        path: 'right-groups',
        component: RightGroupListComponent,
        data: {
          title: 'App Right Groups'
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
