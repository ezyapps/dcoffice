import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { GovtOffice } from '../../../app-admin/models/govt-office.model';
import { GovtOfficeService } from '../../../app-admin/services/govt-office.service';
import { GeoDistrict } from '../../../geo-location/models/geo-district.model';
import { GeoDivision } from '../../../geo-location/models/geo-division.model';
import { GeoMouza } from '../../../geo-location/models/geo-mouza.model';
import { GeoUnion } from '../../../geo-location/models/geo-union.module';
import { GeoUpazila } from '../../../geo-location/models/geo-upazia.module';
import { DistrictService } from '../../../geo-location/services/district.service';
import { DivisionService } from '../../../geo-location/services/division.service';
import { MouzaService } from '../../../geo-location/services/mouza.service';
import { UnionService } from '../../../geo-location/services/union.service';
import { UpazilaService } from '../../../geo-location/services/upazila.service';
import { CaseTopshil } from '../../models/case-topshil.model';
import { NewCivilCase } from '../../models/new-case.model';
import { CaseTopshilService } from '../../services/case-topshil.service';
import { CivilCaseService } from '../../services/civilcase.service';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.less']
})
export class NewCaseComponent implements OnInit {
  model: any = {};
  modelTopshil: any = {};

  divisions: GeoDivision[];
  districts: GeoDistrict[];
  upazilas: GeoUpazila[];
  unions: GeoUnion[];
  mouzas: GeoMouza[];
  offices: GovtOffice[];

  selectedDivCode: string;

  constructor(
    private twister: AlertifyService,
    private upazilaService: UpazilaService,
    private distService: DistrictService,
    private divService: DivisionService,
    private unionService: UnionService,
    private mouzaService: MouzaService,
    private caseService: CivilCaseService,
    private caseTopshilService: CaseTopshilService,
    private officeServices: GovtOfficeService
  ) { }

  ngOnInit() {
    this.loadDistricts();
  }
  loadDivisions() {
    this.divService.findAll().subscribe(
      (data: GeoDivision[]) => {
        this.divisions = data;
      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadDistricts() {
    // this.distService.getAll(this.selectedDivCode).subscribe (
      this.distService.findAll().subscribe (
      (data: GeoDistrict[]) => {
        this.districts = data;
        this.modelTopshil.distCode = '41';
        this.loadUpazilas();
      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadUpazilas() {
    this.upazilaService.getAll(this.modelTopshil.distCode).subscribe(
      (data: GeoUpazila[]) => {
        console.log(data);
        this.upazilas = data;
      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadUnions() {
    this.unionService.getAll(this.modelTopshil.distCode + '-' + this.modelTopshil.upazilaCode).subscribe(
      (data: GeoUnion[]) => {
        this.unions = data;
      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadMouzas() {
    this.loadLandOffices();
    this.mouzaService.getAll(this.modelTopshil.unionId).subscribe(
      (data: GeoMouza[]) => {
        this.mouzas = data;
      }, error => {
        this.twister.error(error.message);
      }
    );
  }

  loadLandOffices() {
    console.log(this.districts.find(a => a.code == this.modelTopshil.distCode));


    var geoCode: string = this.districts.find(a => a.code == this.modelTopshil.distCode).parentCode+"-"
    +this.modelTopshil.distCode+"-"+this.modelTopshil.upazilaCode+"-"+this.unions.find(x => x.id == this.modelTopshil.unionId).code;

    console.log(geoCode);

    this.officeServices.getAllOfficesByGeoLevel(geoCode).subscribe((data: GovtOffice[])=>{
      this.offices = data;
    },
    error => {
      console.log(error.message);
    })
  }
  saveNewCase() {
    this.twister.confirm('Are you sure to file new case?', () => {
      if (this.model.caseType === 'নতুন') {
        this.model.status = 'SF Pending';
      } else {
        this.model.status = 'Waiting for Hearing';
      }

      this.caseService.save(this.model).subscribe (
        (data: NewCivilCase) => {
          this.modelTopshil.caseNo = this.model.caseNo;
          this.caseTopshilService.save(this.modelTopshil).subscribe (
            (topshil: CaseTopshil) => {
              this.twister.success('New case has been recorded successfully.');
            },
            error => {
              this.twister.error(error.message);
            }
          );
        },
        error => {
          this.twister.error(error.message);
        }
      );
    });

    console.log(this.model);
    console.log(this.modelTopshil);
  }
}
