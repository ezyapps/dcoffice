import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { CivilCaseProgress } from '../../models/case-progress.model';
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
  caseProgressModel: CivilCaseProgress;
  currentStage: number = 0;
  hasGovtInterest: boolean = false;

  constructor(
    private twister: AlertifyService,
    private caseService: CivilCaseService,
    private caseProgressService: CivilCaseProgressService
  ) { }

  ngOnInit() {
    this.searchModel.caseNo = 'D-111';
  }

  findCase() {
    this.caseService.getAll(this.searchModel).subscribe(
      (data: any[]) => {
        this.caseDetails = data[0];
        this.caseProgressService.getByCaseId(this.caseDetails.CaseId).subscribe(
          (data: CivilCaseProgress) => {
            this.caseProgressModel = data;
            console.log(data);
            this.getCurrentStage();
          },error => {
            this.twister.error('Sorry! Failed to load case progress. '+ error.message);
          }
        )
        console.log(this.caseDetails);
      },
      error => {
        this.twister.error(error.message);
      }
    );
  }

  getCurrentStage() {

    if(this.caseProgressModel.isSFReceived == true){
      this.currentStage = 1;
    }
    if(this.caseProgressModel.hasGovtInterest != null){
      this.currentStage = 2;
    }
    if(this.caseProgressModel.isSFSentToGPOffice == true){
      this.currentStage = 3;
    }

    if(this.caseProgressModel.isGPOfficeReplyReceived == true){
      this.currentStage = 4;
    }

    if(this.caseProgressModel.isSignedReplySentToGPOffice == true){
      this.currentStage = 5;
    }
  }
  updateGovtInterest() {
    this.twister.confirm('Confirmation','আপনি কি নিশ্চিত?', () => {
      alert('Yes you are in here....');
    }, () => { });
  }
  UpdateSFReceive() {
    this.caseSFModel.CaseId = this.caseDetails.CaseId;
    console.log(this.caseSFModel);
    this.caseProgressService.updateSFDate(this.caseSFModel).subscribe(
      (resp: any) => {
        this.twister.success('Updated Successfully.');
        this.caseProgressModel.isSFReceived = true;
        this.currentStage = 1;
    },
    error => {
      this.twister.error(error.message);
    });
  }
}
