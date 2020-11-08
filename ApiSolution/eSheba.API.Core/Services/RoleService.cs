using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;

namespace eSheba.API.Data.Repos
{
    public class RoleService : BaseRepo<Role>, IRoleService
    {
        public RoleService(IAppDbContext dbContext): base(dbContext)
        {
            
        }
    }
}