import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { CivilCaseService } from '../../services/civilcase.service';

@Component({
  selector: 'app-appeal-case-entry',
  templateUrl: './appeal-case-entry.component.html',
  styleUrls: ['./appeal-case-entry.component.scss']
})
export class AppealCaseEntryComponent implements OnInit {
  caseDetails: any = {};
  appealCaseModel: any = {};

  constructor(
    private twister: AlertifyService,
    private caseService: CivilCaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data['caseDetails']);
      this.caseDetails = data['caseDetails'][0];
    },
    error => {
      this.twister.error('Sorry! Can not load case details.');
    }
    );
  }
  createAppealCase() {
    
  }
}
