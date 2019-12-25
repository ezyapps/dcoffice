import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DesignationComponent } from './components/designation/designation.component';
import { UserRoutingModule } from './user-routing.module';
import { DesignationNewComponent } from './components/designation/designation-new/designation-new.component';
import { FormsModule } from '@angular/forms';
import { DesignationListItemComponent } from './components/designation/designation-list-item/designation-list-item.component';
import { DesignationEditComponent } from './components/designation/designation-edit/designation-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    DesignationComponent,
    DesignationNewComponent,
    DesignationListItemComponent,
    DesignationEditComponent
  ]
})
export class UserModule { }
