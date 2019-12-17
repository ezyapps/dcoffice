using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Models;
using Microsoft.EntityFrameworkCore;

namespace eSheba.API.Data
{
    public class UserRepo : BaseRepo<User>, IUserRepo
    {
        public UserRepo(DataContext context) : base(context)
        {
        }

        public async Task<User> GetUser(int id)
        {
            var users = await _context.Users.Include(p=>p.Photos).FirstAsync( i => i.Id == id);
            return users;            
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p=>p.Photos).ToListAsync();
            return users;
        }
    }
}