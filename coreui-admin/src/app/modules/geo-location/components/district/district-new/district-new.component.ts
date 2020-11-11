import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  @Input() model: any = {};
  @Output() districtCreated = new EventEmitter<GeoDistrict>();
  @Output() divisionChanged = new EventEmitter<string>();
  divisions: GeoDivision[] = [];
  constructor(
    // private ref: DynamicDialogRef,
    // private config: DynamicDialogConfig,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.loadDivisions();
  }

  onDivisionChange() {
    this.divisionChanged.emit(this.model.parentcode);
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
        // this.ref.close(data);
        this.districtCreated.emit(data);
      },
      error => {
        this.alertify.error(error.message);
      }
    );
  }
}
