import { Component, OnInit } from '@angular/core';
import { Role } from '../../../../common/models/app-admin/role.model';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { RoleService } from '../../../../common/_services/app-admin/role.service';
import {DialogService} from 'primeng/dynamicdialog';
import { RoleNewComponent } from '../role-new/role-new.component';

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
    public dialogService: DialogService) { }

  ngOnInit() {
    this.loadRoles();
  }
  openNewRoleWindow() {
    const ref = this.dialogService.open(RoleNewComponent, {
        header: 'নতুন রোল',
        width: '50%'
    });
    ref.onClose.subscribe(()=>{
      this.alertify.message('The role has been created');
    });
  }
  loadRoles(){
    this.roleService.getAll().subscribe((data: Role[]) => {
      this.roles = data;
    },
    error => {
      this.alertify.error(error);
    })
  }
}
