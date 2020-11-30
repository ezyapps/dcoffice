import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserRouterModule } from './users-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRouterModule
  ],
  declarations: [
    UsersComponent,
    ProfileComponent,
    RegisterComponent,
    EmployeeListComponent
  ]
})
export class UsersModule { }
