using System;
using System.Collections.Generic;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using Newtonsoft.Json;

namespace eSheba.API.Data
{
    public class Seed
    {
        private readonly IAppDbContext _context;
        public Seed(IAppDbContext context)
        {
            _context = context;
        }
        public void SeedUser(){
            var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach (var user in users)
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("123456", out passwordHash, out passwordSalt);
                user.Id = new Guid();
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();
                _context.Set<User>().Add(user);
            }
            _context.SaveChanges();
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}