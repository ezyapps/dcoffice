using eSheba.API.Models;

namespace eSheba.API.Data.Repos
{
    public class RoleRightsRepo : BaseRepo<RoleRights>
    {
        public RoleRightsRepo(DataContext context) : base(context)
        {
        }
    }
}