import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Role } from '../../../../common/models/app-admin/role.model';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { RoleService } from '../../../../common/_services/app-admin/role.service';

@Component({
  selector: 'app-role-new',
  templateUrl: './role-new.component.html',
  styleUrls: ['./role-new.component.scss']
})
export class RoleNewComponent implements OnInit {
  model: any = {}
  constructor(
    public ref: DynamicDialogRef, public config: DynamicDialogConfig,
    private roleService: RoleService,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
    this.model.roleName = 'AC ICT';
  }

  saveRole() {
    if(this.model != null){
      this.roleService.saveRole(this.model).subscribe((role: Role) => {
        this.ref.close(role);
      },
      err => {
        this.alertify.error(err);
      })
    }

  }
}
