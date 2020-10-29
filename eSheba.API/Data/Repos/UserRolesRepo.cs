using eSheba.API.Models;

namespace eSheba.API.Data.Repos
{
    public class UserRolesRepo : BaseRepo<UserRoles>
    {
        public UserRolesRepo(DataContext context) : base(context)
        {
        }
    }
}