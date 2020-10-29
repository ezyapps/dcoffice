using eSheba.API.Data.Interfaces;
using eSheba.API.Models;
using Microsoft.EntityFrameworkCore;

namespace eSheba.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options){}
        public DbSet<User> Users{get;set;}
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Designation> Designations {get; set;}
        public DbSet<Role> Roles { get; set; }
        public DbSet<Right> Rights { get; set; }
        public DbSet<RoleRights> RoleRights { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }
    }
}