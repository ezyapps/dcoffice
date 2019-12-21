using eSheba.API.Data.Interfaces;
using eSheba.API.Models;

namespace eSheba.API.Data.Repos
{
    public class RoleRepo : BaseRepo<Role>, IRoleRepo
    {
        public RoleRepo(DataContext dbContext): base(dbContext)
        {
            
        }
    }
}