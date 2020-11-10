import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { AlertifyService } from '../../../../../common/_services/alertify.service';
import { GeoDivision } from '../../../models/geo-division.model';
import { DivisionService } from '../../../services/division.service';

@Component({
  selector: 'app-division-new',
  templateUrl: './division-new.component.html',
  styleUrls: ['./division-new.component.scss']
})
export class DivisionNewComponent implements OnInit {
  model: any = {};
  constructor(
    // private ref: DynamicDialogRef,
    // private config: DynamicDialogConfig,
    private divisionService: DivisionService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }
  saveDivision() {
    this.divisionService.save(this.model).subscribe((data: GeoDivision) => {
      // this.ref.close(data);
    },
    error => {
      this.alertify.error(error.message);
    });
  }
}
