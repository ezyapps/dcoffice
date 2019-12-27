using eSheba.API.Data.Interfaces;
using eSheba.API.Data.Repos;
using Microsoft.Extensions.DependencyInjection;

namespace eSheba.API
{
    public static class StartupRepo
    {
        public static void LinkRepos(IServiceCollection services) {
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IDesignationRepo, DesignationRepo>();
            services.AddScoped<IRoleRepo, RoleRepo>();
            services.AddScoped<IRightRepo, RightRepo>();
        }
    }
}