using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace eSheba.API.Core
{
    public static class LinkCoreServices
    {
        public static void LinkRepos(IServiceCollection services)
        {
            services.AddScoped<IApplicationService, ApplicationService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IDesignationService, DesignationService>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IRightService, RightService>();
            services.AddScoped<IRoleRightService, RoleRightService>();
            services.AddScoped<IRightGroupService, RightGroupService>();
            services.AddScoped<IUserRolesService, UserRoleService>();
        }
    }
}
