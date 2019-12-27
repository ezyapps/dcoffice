using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Models;

namespace eSheba.API.Data.Interfaces
{
    public interface IUserRepo: IRepo<User>
    {
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(Guid id);
    }
}