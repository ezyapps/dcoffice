import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminComponent } from './app-admin.component';
import { RightGroupListComponent } from './components/app-rights/right-group/right-group-list/right-group-list.component';
import { RightsComponent } from './components/app-rights/rights/rights.component';
import { MinistryComponent } from './components/office-organogram/ministry/ministry.component';
import { OfficeBranchComponent } from './components/office-organogram/office-branch/office-branch.component';
import { OfficeLevelComponent } from './components/office-organogram/office-level/office-level.component';
import { OfficeStructureComponent } from './components/office-organogram/office-structure/office-structure.component';
import { OfficeComponent } from './components/office-organogram/office/office.component';
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
        path: 'ministries',
        component: MinistryComponent,
        data: {
          title: 'Ministries'
        }
      },
      {
        path: 'office-levels',
        component: OfficeLevelComponent,
        data: {
          title: 'Office Levels'
        }
      },
      {
        path: 'offices',
        component: OfficeComponent,
        data: {
          title: 'Offices'
        }
      },
      {
        path: 'office-branches',
        component: OfficeBranchComponent,
        data: {
          title: 'Office Branches'
        }
      },
      {
        path: 'office-structure',
        component: OfficeStructureComponent,
        data: {
          title: 'Office Branches'
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
        path: 'rights',
        component: RightsComponent,
        data: {
          title: 'App Rights'
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
