import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserRouterModule } from './users-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { EmployeeMgtComponent } from './components/employee-mgt/employee-mgt.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRouterModule,
    ButtonModule,
    TableModule,
    FieldsetModule,
    DropdownModule
  ],
  declarations: [
    UsersComponent,
    ProfileComponent,
    RegisterComponent,
    EmployeeListComponent,
    EmployeeMgtComponent
  ]
})
export class UsersModule { }
