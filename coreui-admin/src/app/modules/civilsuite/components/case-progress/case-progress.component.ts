import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AlertifyService } from '../../../../common/_services/alertify.service';
import { CivilCaseProgress } from '../../models/case-progress.model';
import { CivilCaseProgressService } from '../../services/civilcase-progress.service';
import { CivilCaseService } from '../../services/civilcase.service';

@Component({
  selector: 'app-case-progress',
  templateUrl: './case-progress.component.html',
  styleUrls: ['./case-progress.component.scss']
})
export class CaseProgressComponent implements OnInit, OnChanges {
  caseSFModel: any = {};
  caseSF2GpOModel: any = {};
  @Input()caseProgressModel: CivilCaseProgress;
  currentStage: number = 0;
  hasGovtInterest: boolean = false;
  caseResult: boolean = false;
  constructor(
    private twister: AlertifyService,
    private caseService: CivilCaseService,
    private caseProgressService: CivilCaseProgressService
    ) { }

  ngOnInit() {
    this.getCurrentStage();
  }
  ngOnChanges() {
    this.getCurrentStage();
    // create header using child_id
    console.log(this.caseProgressModel);
  }
  getCurrentStage() {

    if(this.caseProgressModel?.isSFReceived == true){
      this.currentStage = 1;
    }
    if(this.caseProgressModel?.hasGovtInterest != null){
      this.currentStage = 2;
    }
    if(this.caseProgressModel?.isSFSentToGPOffice == true){
      this.currentStage = 3;
    }

    if(this.caseProgressModel?.isGPOfficeReplyReceived == true){
      this.currentStage = 4;
    }

    if(this.caseProgressModel?.isSignedReplySentToGPOffice == true){
      this.currentStage = 5;
    }
    if(this.caseProgressModel?.hearingDate !== null){
      this.currentStage = 5;
    }
    if(this.caseProgressModel?.result >= 0){
      this.currentStage = 7;
    }
  }
  updateGovtInterest() {
    this.twister.confirm('Confirmation', 'আপনি কি নিশ্চিত?', () => {
      this.caseProgressService.updateGovtInterest(this.caseProgressModel.caseId, this.hasGovtInterest).subscribe(
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
    this.caseSF2GpOModel.CaseId = this.caseProgressModel.caseId;
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
    this.caseSF2GpOModel.CaseId = this.caseProgressModel.caseId;
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
    this.caseSF2GpOModel.CaseId = this.caseProgressModel.caseId;
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
    this.twister.confirm('নিশ্চিত করণ', 'আপনি কি নিশ্চিত?', () => {
      const result = this.caseResult == true? 1: 0;
      this.caseProgressService.updateCaseResult(this.caseProgressModel.caseId, result).subscribe(
        (data: any) => {
          this.twister.success('Updated Successfully.');
          this.caseProgressModel.result = result;
          this.currentStage = 6;
        }, error => {
          this.twister.error(error.message);
        }
      );
    }, () => { });
  }

  UpdateReplyReceivedFromGpO(){
    this.caseSF2GpOModel.CaseId = this.caseProgressModel.caseId;
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
    this.caseSFModel.CaseId = this.caseProgressModel.caseId;
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
