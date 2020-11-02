using System;
using eSheba.API.Data;

namespace eSheba.API.Models
{
    public class CivilCase: Entity
    {
        public string CaseNo { get; set; }
        public string CaseSubject { get; set; }
        public string CaseRefNo { get; set; }
        public string CaseCategory { get; set; }
        public string CaseType { get; set; }
        public string DistAdmin { get; set; }
        public string OpositParty { get; set; }
        public bool IsSFReceived { get; set; }
        public DateTime SFReceiveDate { get; set; }
        public bool HasGovtInterest { get; set; }
        public DateTime HearingDate { get; set; }
        public string Status { get; set; }

    }
}