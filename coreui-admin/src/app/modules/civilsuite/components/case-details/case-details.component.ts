import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { CivilCaseService } from '../../services/civilcase.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {
  caseDetails: any = {};
  searchModel: any = {};
  constructor(
    private twister: AlertifyService,
    private caseService: CivilCaseService
  ) { }

  ngOnInit() {

  }

  findCase() {
    this.caseService.getAll(this.searchModel).subscribe(
      (data: any[]) => {
        this.caseDetails = data[0];
        console.log(this.caseDetails);
      },
      error => {
        this.twister.error(error.message);
      }
    );
  }
}
