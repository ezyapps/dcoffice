using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Models;

namespace eSheba.API.Data
{
    public interface IUserRepo: IRepo<User>
    {
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}