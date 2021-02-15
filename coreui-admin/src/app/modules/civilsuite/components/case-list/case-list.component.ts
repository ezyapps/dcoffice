import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { AuthService } from '../../../../common/_services/auth.service';
import { GeoDistrict } from '../../../geo-location/models/geo-district.model';
import { GeoDivision } from '../../../geo-location/models/geo-division.model';
import { GeoUnion } from '../../../geo-location/models/geo-union.module';
import { GeoUpazila } from '../../../geo-location/models/geo-upazia.module';
import { DistrictService } from '../../../geo-location/services/district.service';
import { DivisionService } from '../../../geo-location/services/division.service';
import { UnionService } from '../../../geo-location/services/union.service';
import { UpazilaService } from '../../../geo-location/services/upazila.service';
import { CivilCaseProgress } from '../../models/case-progress.model';
import { CivilCaseProgressService } from '../../services/civilcase-progress.service';
import { CivilCaseService } from '../../services/civilcase.service';
import { CaseProgressPopupComponent } from '../case-progress-popup/case-progress-popup.component';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.less'],
  providers: [DialogService]
})
export class CaseListComponent implements OnInit {
 caseList: any[];
 divisions: GeoDivision[];
 districts: GeoDistrict[];
 upazilas: GeoUpazila[];
 unions: GeoUnion[];
 searchModel: any = {};
  constructor(
    private twister: AlertifyService,
    private caseService: CivilCaseService,
    private upazilaService: UpazilaService,
    private distService: DistrictService,
    private divService: DivisionService,
    private unionService: UnionService,
    private authService: AuthService,
    private router: Router,
    private dialogService: DialogService,
    private caseProgressService: CivilCaseProgressService
  ) { }

  ngOnInit() {
    this.loadDistricts();
  }

  findCase() {
    this.loadCases();
  }

  caseDetails(caseNo){
    this.router.navigate(['/civil-suite/casedetails/'+caseNo]);
  }

  loadProgressWindow(caseId){
    this.caseProgressService.getByCaseId(caseId).subscribe(
      (repoData: CivilCaseProgress) => {
          const ref = this.dialogService.open(CaseProgressPopupComponent, {
            data: {
                caseProgress: repoData
            },
            width: '50%'
        });
      }, error => {
        this.twister.error('Sorry! Failed to load case progress. ' );

      }
    );
  }

  loadDistricts() {
    // this.distService.getAll(this.selectedDivCode).subscribe (
      this.distService.findAll().subscribe (
      (data: GeoDistrict[]) => {
        this.districts = data;
        this.searchModel.distCode = this.authService.decodedToken.OfficeGEOCode.split('-')[1];
        this.loadUpazilas();
      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadUpazilas() {
    this.upazilaService.getAll(this.searchModel.distCode).subscribe(
      (data: GeoUpazila[]) => {
        console.log(data);
        this.upazilas = data;
        try {
          if(this.authService.decodedToken.OfficeGEOCode.split('-')[2] != '00'){
            this.searchModel.upazilaCode = this.authService.decodedToken.OfficeGEOCode.split('-')[2];
          }
        }catch(ex) {
        }

      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadUnions() {
    this.unionService.getAll(this.searchModel.distCode + '-' + this.searchModel.upazilaCode).subscribe(
      (data: GeoUnion[]) => {
        this.unions = data;
      }, error => {
        this.twister.error(error.message);
      }
    );
  }
  loadCases() {
    this.caseService.getAll(this.searchModel).subscribe(
      (data: any[]) => {
        this.caseList = data;
        console.log(data);
      },
      error => {
        this.twister.error(error.message);
      }
    );
  }

}
