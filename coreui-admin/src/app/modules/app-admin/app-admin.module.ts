import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAdminComponent } from './app-admin.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { RoleNewComponent } from './roles/role-new/role-new.component';
import { AppAdminRoutingModule } from './app-admin-routing.module.ts';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [
    AppAdminComponent,
    RoleListComponent,
    RoleEditComponent,
    RoleNewComponent
  ]
})
export class AppAdminModule { }
