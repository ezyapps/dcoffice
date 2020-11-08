using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;
using Microsoft.EntityFrameworkCore;

namespace eSheba.API.Data.Repos
{
    public class UserService : BaseRepo<User>, IUserService
    {
        public UserService(IAppDbContext context) : base(context)
        {
        }

        public async Task<User> GetUser(Guid id)
        {
            var users = await _context.Set<User>().Include(p=>p.Photos).FirstAsync( i => i.Id == id);
            return users;            
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Set<User>().Include(p=>p.Photos).ToListAsync();
            return users;
        }
    }
}