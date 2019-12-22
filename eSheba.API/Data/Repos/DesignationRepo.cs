using eSheba.API.Data.Interfaces;
using eSheba.API.Models;

namespace eSheba.API.Data.Repos
{
    public class DesignationRepo: BaseRepo<Designation>, IDesignationRepo
    {
        public DesignationRepo(DataContext dbContext): base(dbContext)
        {
            
        }
    }
}