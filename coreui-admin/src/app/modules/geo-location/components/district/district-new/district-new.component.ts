import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AlertifyService } from '../../../../../common/_services/alertify.service';
import { GeoDistrict } from '../../../models/geo-district.model';
import { GeoDivision } from '../../../models/geo-division.model';
import { DistrictService } from '../../../services/district.service';
import { DivisionService } from '../../../services/division.service';

@Component({
  selector: 'app-district-new',
  templateUrl: './district-new.component.html',
  styleUrls: ['./district-new.component.scss']
})
export class DistrictNewComponent implements OnInit {
  model: any = {};
  divisions: GeoDivision[] = [];
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.loadDivisions();
  }
  loadDivisions() {
    this.divisionService.getAll().subscribe(
      (data: GeoDivision[]) => {
        this.divisions = data;
        console.log(this.divisions);
      },
      error => {
        this.alertify.error(error.message);
      }
    );
  }
  saveDistrict() {
    this.districtService.save(this.model).subscribe(
      (data: GeoDistrict) => {
        this.ref.close(data);
      },
      error => {
        this.alertify.error(error.message);
      }
    );
  }
}
