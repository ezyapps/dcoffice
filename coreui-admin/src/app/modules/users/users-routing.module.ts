import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeMgtComponent } from './components/employee-mgt/employee-mgt.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './users.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        component: UsersComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent,
        data: {
          title: 'Employee List'
        }
      },
      {
        path: 'employee-mgt',
        component: EmployeeMgtComponent,
        data: {
          title: 'কর্মকর্তা ব্যবস্থাপনা'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'User Profile'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'User Profile'
        }
      }
    ]
  }
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class UserRouterModule {

}
