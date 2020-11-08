using eSheba.API.Core.Interfaces;
using eSheba.API.Data;
using eSheba.API.Data.Interfaces;
using eSheba.API.Data.Repos;
using eSheba.API.Infra;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace eSheba.API
{
    public static class StartupRepo
    {
        public static void LinkRepos(IServiceCollection services) {
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IDesignationService, DesignationService>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IRightService, RightService>();
            services.AddScoped<IAppDbContext, AppDataContext>();
        }
    }
}