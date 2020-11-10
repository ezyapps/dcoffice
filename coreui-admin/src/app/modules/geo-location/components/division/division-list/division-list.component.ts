import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AlertifyService } from '../../../../../common/_services/alertify.service';
import { GeoDivision } from '../../../models/geo-division.model';
import { DivisionService } from '../../../services/division.service';
import { DivisionNewComponent } from '../division-new/division-new.component';


@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss'],
  // providers: [DialogService]
})
export class DivisionListComponent implements OnInit {
  divisions: GeoDivision[] = [];
  showNewWindow: boolean = false;
  constructor(
    private alertify: AlertifyService,
    // private dialogService: DialogService,
    private divisionService: DivisionService) { }

  ngOnInit() {
    this.loadDivisions();
  }
  loadDivisions() {
  this.divisionService.getAll().subscribe (
    (data: GeoDivision[]) => {
        this.divisions = data;
      },
      error => {
        this.alertify.error(error.message);
      }
    );
  }
  openNewWindow() {
    this.showNewWindow = !this.showNewWindow;
    // const refDivision = this.dialogService.open(DivisionNewComponent, {
    //     header: 'নতুন বিভাগ',
    //     width: '70%'
    //   });
    // refDivision.onClose.subscribe((division: GeoDivision) => {
    //   if (division !== null) {
    //     this.alertify.message('The Division has been created');
    //     this.loadDivisions();
    //     // this.divisions.push(division);
    //   }
    // });
  }
}
