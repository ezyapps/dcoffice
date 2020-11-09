using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;

namespace eSheba.API.Core.Services
{
    public class UserRoleService : BaseRepo<UserRoles>, IUserRolesService
    {
        public UserRoleService(IAppDbContext context) : base(context)
        {
        }
    }
}