import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DesignationComponent } from './components/designation/designation.component';
import { Routes, RouterModule } from '@angular/router';

const userRoutes: Routes = [
  {
  path: 'user',
  children: [
      {path: '', component: UserComponent},
      {path: 'list', component: UserListComponent},
      {path: 'designation',
        children: [
          {path: '', component: DesignationComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
