using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;

namespace eSheba.API.Data.Repos
{
    public class RoleRightsRepo : BaseRepo<RoleRights>
    {
        public RoleRightsRepo(IAppDbContext context) : base(context)
        {
        }
    }
}