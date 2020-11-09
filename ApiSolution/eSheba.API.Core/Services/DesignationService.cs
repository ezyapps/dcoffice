using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;

namespace eSheba.API.Core.Services
{
    public class DesignationService: BaseRepo<Designation>, IDesignationService
    {
        public DesignationService(IAppDbContext dbContext): base(dbContext)
        {
            
        }
    }
}