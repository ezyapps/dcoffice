using eSheba.API.CivilSuite.Interfaces;
using eSheba.API.CivilSuite.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;

namespace eSheba.API.CivilSuite.Services
{
    public class CivilCaseCadastreService : BaseRepo<CivilCaseCadastre>, ICivilCaseCadstreService
    {
        public CivilCaseCadastreService(IAppDbContext context) : base(context)
        {
        }
    }
}