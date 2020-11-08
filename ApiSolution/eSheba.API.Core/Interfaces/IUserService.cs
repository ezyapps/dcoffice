using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;

namespace eSheba.API.Core.Interfaces
{
    public interface IUserService: IRepo<User>
    {
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(Guid id);
    }
}