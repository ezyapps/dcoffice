import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { CivilCaseService } from '../../services/civilcase.service';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.less']
})
export class CaseListComponent implements OnInit {
 caseList: any[];
  constructor(
    private twister: AlertifyService,
    private caseService: CivilCaseService
  ) { }

  ngOnInit() {
    this.loadCases();
  }

  loadCases() {
    this.caseService.findAll().subscribe(
      (data: any[]) => {
        this.caseList = data;
      },
      error => {
        this.twister.error(error.message);
      }
    );
  }

}
