import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { DesignationComponent } from './components/designation/designation.component';
import { RoleListComponent } from './components/role/role-list/role-list.component';
import { SetupComponent } from './setup.component';
import { RightListComponent } from './components/right/right-list/right-list.component';

const setupRoutes: Routes = [
  {
    path: 'setup',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SetupComponent
      },
      {
        path: 'designations',
        component: DesignationComponent
      },
      {
        path: 'roles',
        component: RoleListComponent
      },
      {
        path: 'rights',
        component: RightListComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(setupRoutes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
