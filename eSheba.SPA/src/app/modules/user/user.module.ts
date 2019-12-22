import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DesignationComponent } from './components/designation/designation.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    DesignationComponent
  ]
})
export class UserModule { }
