using eSheba.API.Core.Models;
using eSheba.API.Shared.Models;

namespace eSheba.API.CivilSuite.Models
{
    public class CivilCaseCadastre: Entity
    {
        public string CaseNo { get; set; }
        public string DistCode { get; set; }
        public string UpazilaCode { get; set; }
        public string UnionCode { get; set; }
        public string MouzaNo { get; set; }
        public string DagNo { get; set; }
        
    }
}