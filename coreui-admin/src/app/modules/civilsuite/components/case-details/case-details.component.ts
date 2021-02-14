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
  caseSF2GpOModel: any = {};
  caseProgressModel: CivilCaseProgress;
  currentStage: number = 0;
  hasGovtInterest: boolean = false;
  caseResult: number = 0;
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
          }, error => {
            this.twister.error('Sorry! Failed to load case progress. ' + error.message);
          }
        );
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
    if(this.caseProgressModel.hearingDate !== null){
      this.currentStage = 5;
    }
    if(this.caseProgressModel.result >= 0){
      this.currentStage = 7;
    }
  }
  updateGovtInterest() {
    this.twister.confirm('Confirmation', 'আপনি কি নিশ্চিত?', () => {
      this.caseProgressService.updateGovtInterest(this.caseDetails.CaseId, this.hasGovtInterest).subscribe(
        (data: any) => {
          this.twister.success('Updated Successfully.');
          this.caseProgressModel.hasGovtInterest = this.hasGovtInterest;
          this.currentStage = 2;
        }, error => {
          this.twister.error(error.message);
        }
      );
    }, () => { });
  }

  UpdateSendSFToGpO() {
    this.caseSF2GpOModel.CaseId = this.caseDetails.CaseId;
    console.log(this.caseSF2GpOModel);
    this.caseProgressService.updateSendSFToGpO(this.caseSF2GpOModel).subscribe(
      (resp: any) => {
        this.twister.success('Updated Successfully.');
        this.caseProgressModel.dateSFSentToGPOffice = this.caseSF2GpOModel.ActionDate;
        this.currentStage = 3;
    },
    error => {
      this.twister.error(error.message);
    });
  }

  UpdateSignedReplySendToGpO() {
    this.caseSF2GpOModel.CaseId = this.caseDetails.CaseId;
    console.log(this.caseSF2GpOModel);
    this.caseProgressService.updateSignedReplySendToGpO(this.caseSF2GpOModel).subscribe(
      (resp: any) => {
        this.twister.success('Updated Successfully.');
        this.caseProgressModel.dateSignedReplySentToGPOffice = this.caseSF2GpOModel.ActionDate;
        this.currentStage = 5;
    },
    error => {
      this.twister.error(error.message);
    });
  }

  UpdateHearingDate() {
    this.caseSF2GpOModel.CaseId = this.caseDetails.CaseId;
    console.log(this.caseSF2GpOModel);
    this.caseProgressService.updateHearingDate(this.caseSF2GpOModel).subscribe(
      (resp: any) => {
        this.twister.success('Updated Successfully.');
        this.caseProgressModel.hearingDate = this.caseSF2GpOModel.ActionDate;
        this.currentStage = 6;
    },
    error => {
      this.twister.error(error.message);
    });
  }

  updateResult() {
    this.twister.confirm('Confirmation', 'আপনি কি নিশ্চিত?', () => {
      this.caseProgressService.updateCaseResult(this.caseDetails.CaseId, this.caseResult).subscribe(
        (data: any) => {
          this.twister.success('Updated Successfully.');
          this.caseProgressModel.result = this.caseResult;
          this.currentStage = 7;
        }, error => {
          this.twister.error(error.message);
        }
      );
    }, () => { });
  }
  UpdateReplyReceivedFromGpO(){
    this.caseSF2GpOModel.CaseId = this.caseDetails.CaseId;
    console.log(this.caseSF2GpOModel);
    this.caseProgressService.updateReplyReceivedFromGpO(this.caseSF2GpOModel).subscribe(
      (resp: any) => {
        this.twister.success('Updated Successfully.');
        this.caseProgressModel.dateReplyReceivedFromGPOffice = this.caseSF2GpOModel.ActionDate;
        this.currentStage = 4;
    },
    error => {
      this.twister.error(error.message);
    });
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
