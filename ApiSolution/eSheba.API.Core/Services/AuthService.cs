using System;
using System.Linq;
using System.Threading.Tasks;
using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Data.Interfaces;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace eSheba.API.Data.Repos
{
    public class AuthService : IAuthService
    {
        private readonly IAppDbContext _context;
        public AuthService(IAppDbContext context)
        {
            _context = context;

        }
        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Set<User>().FirstOrDefaultAsync(x => x.Username == username);
            if(user == null)
                return null;
            if(!VerifyPasswordHash(password, user.PasswordSalt, user.PasswordHash)){
                return null;
            }
            return user;


        }

        private bool VerifyPasswordHash(string password, byte[] passwordSalt, byte[] passwordHash)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt)){
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i<computedHash.Length; i++)
                {
                    if(computedHash[i] != passwordHash[i]) return false;
                }
                return true;
            }
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Set<User>().AddAsync(user);
            await _context.SaveChangesAsync();
            return user;

        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _context.Set<User>().AnyAsync(x => x.Username == username))
                return true;
            return false;
        }
    }
}