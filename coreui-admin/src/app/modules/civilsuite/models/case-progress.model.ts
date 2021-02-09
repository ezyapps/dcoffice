export class CivilCaseProgress {
  id?: string;
  CaseId?: string;
  IsSFReceived?: boolean;
  SFReceiveDate?: Date;
  HasGovtInterest?: boolean;
  IsSFSentToGPOffice?: boolean;
  DateSFSentToGPOffice?: Date;
  IsGPOfficeReplyReceived?: boolean;
  DateReplyReceivedFromGPOffice?: Date;
  IsSignedReplySentToGPOffice?: boolean;
  DateSignedReplySentToGPOffice?: Date;
  HearingDate?: Date;
}
