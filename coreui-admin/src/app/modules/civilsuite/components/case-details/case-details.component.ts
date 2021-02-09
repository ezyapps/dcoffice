import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { CivilCaseProgressService } from '../../services/civilcase-progress.service';
import { CivilCaseService } from '../../services/civilcase.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.less']
})
export class CaseDetailsComponent implements OnInit {
  caseDetails: any = {};
  searchModel: any = {};
  caseSFModel: any = {};

  currentStage: number = 0;
  constructor(
    private twister: AlertifyService,
    private caseService: CivilCaseService,
    private caseProgressService: CivilCaseProgressService
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

  getCurrentStage() {

    if(this.caseDetails.IsSFReceived){
      this.currentStage = 1;
    }

    if(this.caseDetails.IsSFSentToGPOffice){
      this.currentStage = 2;
    }

    if(this.caseDetails.IsGPOfficeReplyReceived){
      this.currentStage = 3;
    }

    if(this.caseDetails.IsSignedReplySentToGPOffice){
      this.currentStage = 4;
    }
  }

  UpdateSFReceive() {
    this.caseSFModel.CaseId = this.caseDetails.CaseId;
    console.log(this.caseSFModel);
    this.caseProgressService.updateSFDate(this.caseSFModel).subscribe(
      (resp: any) => {
        this.twister.success('Updated Successfully.');
        this.caseDetails.IsSFReceived = true;
        this.currentStage = 1;
    },
    error => {
      this.twister.error(error.message);
    });
  }
}
