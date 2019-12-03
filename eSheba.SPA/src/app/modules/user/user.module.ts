import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    UserListComponent
  ]
})
export class UserModule { }
