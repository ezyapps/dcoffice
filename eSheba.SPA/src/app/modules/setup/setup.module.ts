import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { DesignationComponent } from './components/designation/designation.component';
import { DesignationNewComponent } from './components/designation/designation-new/designation-new.component';
import { DesignationListItemComponent } from './components/designation/designation-list-item/designation-list-item.component';
import { DesignationEditComponent } from './components/designation/designation-edit/designation-edit.component';
import { RoleListComponent } from './components/role/role-list/role-list.component';
import { RoleNewComponent } from './components/role/role-new/role-new.component';
import { RoleListItemComponent } from './components/role/role-list-item/role-list-item.component';
import { RoleEditComponent } from './components/role/role-edit/role-edit.component';
import { FormsModule } from '@angular/forms';
import { RightListComponent } from './components/right/right-list/right-list.component';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule
  ],
  declarations: [
    SetupComponent,
    DesignationComponent,
    DesignationNewComponent,
    DesignationListItemComponent,
    DesignationEditComponent,
    RoleListComponent,
    RoleNewComponent,
    RoleListItemComponent,
    RoleEditComponent,
    RightListComponent
  ]
})
export class SetupModule { }
