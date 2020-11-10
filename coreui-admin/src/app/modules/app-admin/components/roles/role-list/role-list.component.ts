import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../../../common/_services/alertify.service';
import {DialogService} from 'primeng/dynamicdialog';
import { RoleNewComponent } from '../role-new/role-new.component';
import { Role } from '../../../models/role.model';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.less'],
  providers: [DialogService]
})
export class RoleListComponent implements OnInit {
  roles: Role[] = [];
  constructor(
    private roleService: RoleService,
    private alertify: AlertifyService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.loadRoles();
  }
  openNewRoleWindow() {
    const ref = this.dialogService.open(RoleNewComponent, {
        header: 'নতুন রোল',
        width: '50%'
    });
    ref.onClose.subscribe((role: Role) => {
      if (role !== null) {
        this.alertify.message('The role has been created');
        // this.roles.push(role);
      }
    });
  }
  loadRoles() {
    this.roleService.getAll().subscribe((data: Role[]) => {
      this.roles = data;
    },
    error => {
      this.alertify.error(error);
    });
  }
}