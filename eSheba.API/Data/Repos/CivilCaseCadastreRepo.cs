using eSheba.API.Data.Interfaces;
using eSheba.API.Models;

namespace eSheba.API.Data.Repos
{
    public class CivilCaseCadastreRepo : BaseRepo<CivilCaseCadastre>, ICivilCaseCadstreRepo
    {
        public CivilCaseCadastreRepo(DataContext context) : base(context)
        {
        }
    }
}