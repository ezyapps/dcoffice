using eSheba.API.Core.Models;
using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace eSheba.API.Infra
{
    public partial class AppDataContext: DbContext, IAppDbContext
    {
        public DbContext Instance => this;
        public AppDataContext(DbContextOptions<AppDataContext> options):base(options){
        
        }

        #region APP-CORE
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<RightGroup> RightGroups { get; set; }
        public DbSet<Right> Rights { get; set; }
        public DbSet<RoleRights> RoleRights { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }
        #endregion

        #region GEO-LOCATION
        public DbSet<GeoDivision> GeoDivisions { get; set; }
        public DbSet<GeoDistrict> GeoDistricts { get; set; }
        public DbSet<GeoUpazila> GeoUpazilas { get; set; }
        public DbSet<GeoUnion> GeoUnions { get; set; }
        public DbSet<GeoMouza> GeoMouza { get; set; }
        #endregion

        public async Task<int> SaveChangesAsync()
        {
            return await Instance.SaveChangesAsync();
        }
    }
}