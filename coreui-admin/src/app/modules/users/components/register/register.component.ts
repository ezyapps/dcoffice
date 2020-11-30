import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { GovtOfficeBranch } from '../../../app-admin/models/govt-office-branch.model';
import { GovtOfficeStructure } from '../../../app-admin/models/govt-office-structure.model';
import { GovtOffice } from '../../../app-admin/models/govt-office.model';
import { Ministry } from '../../../app-admin/models/ministry.model';
import { OfficeLevel } from '../../../app-admin/models/office-level.model';
import { GovtOfficeBranchService } from '../../../app-admin/services/govt-office-branch.service';
import { GovtOfficeStructureService } from '../../../app-admin/services/govt-office-structure.service';
import { GovtOfficeService } from '../../../app-admin/services/govt-office.service';
import { MinistryService } from '../../../app-admin/services/ministry.service';
import { OfficeLevelService } from '../../../app-admin/services/office-level.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  ministries: Ministry[];
  officeLevels: OfficeLevel[];
  offices: GovtOffice[];
  officeBranches: GovtOfficeBranch[];
  officeStructures: GovtOfficeStructure[];


  constructor(
    private ministryService: MinistryService,
    private officeLevelService:  OfficeLevelService,
    private officeService:  GovtOfficeService,
    private twister: AlertifyService,
    private officeBranchService: GovtOfficeBranchService,
    private officeStructureService: GovtOfficeStructureService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadMinistries();
  }

  saveEmployee() {

  }
  loadMinistries(){
    this.ministryService.findAll().subscribe(
      (data: Ministry[]) => {
        this.ministries = data;
      },
      error => {
        this.twister.error(error.message);
      }
    )
  }
  onOfficeLevelChange() {
    // var geoLevel = this.officeLevels.find(x => x.id === this.model.officeLevelId).geoLevel;
    this.loadOffices();
  }

  loadOffices() {
    this.officeService.getAllByMinistryOfficeLevel(this.model.officeLevelId).subscribe (
      (data: GovtOffice[]) => {
        this.offices = data;
      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadOfficeLevels() {
    this.officeLevelService.getAll(this.model.ministryId).subscribe(
      (data: OfficeLevel[]) => {
        this.officeLevels = data;
      },
      error => {
        this.twister.error(error.message);
      }
    )
  }
  loadOfficeBranches(){
    this.officeBranchService.getAllByOffice(this.model.officeId).subscribe(
      (data: GovtOfficeBranch[]) => {
        this.officeBranches = data;
        console.log(this.officeBranches);
      },
      error => {
        this.twister.error(error.message);
      }
    )
  }

  loadOfficeStructures() {
    this.officeStructureService.getAllByOfficeBranch(this.model.branchId).subscribe(
      (data: GovtOfficeStructure[]) => {
        this.officeStructures = data;
      },
      error => {
        this.twister.error(error.message);
      }
    )
  }
}
