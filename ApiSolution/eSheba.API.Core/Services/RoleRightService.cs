using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;

namespace eSheba.API.Core.Services
{
    public class RoleRightService : BaseRepo<RoleRights>, IRoleRightService
    {
        public RoleRightService(IAppDbContext context) : base(context)
        {
        }
    }
}