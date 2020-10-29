import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth.guard';

const userRoutes: Routes = [
  {
  path: 'users',
  canActivate: [AuthGuard],
  children: [
      {path: '', component: UserComponent},
      {path: 'list', component: UserListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
