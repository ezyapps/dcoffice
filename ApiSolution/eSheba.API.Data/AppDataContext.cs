using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace eSheba.API.Infra
{
    public partial class AppDataContext: DbContext, IAppDbContext
    {
        public DbContext Instance => this;
        public AppDataContext(DbContextOptions<AppDataContext> options):base(options){}
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Right> Rights { get; set; }
        public DbSet<RoleRights> RoleRights { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }

        public async Task<int> SaveChangesAsync()
        {
            return await Instance.SaveChangesAsync();
        }
    }
}