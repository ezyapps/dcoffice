using eSheba.API.Data.Interfaces;
using eSheba.API.Models;

namespace eSheba.API.Data.Repos
{
    public class RightRepo: BaseRepo<Right>, IRightRepo
    {
        public RightRepo(DataContext dbContext): base(dbContext)
        {
            
        }
    }
}