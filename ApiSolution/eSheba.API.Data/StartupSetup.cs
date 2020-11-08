using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace eSheba.API.Infra
{
    public static class StartupSetup
    {
        public static void AddAppDbContext(this IServiceCollection services, IConfiguration configuration) =>
            services.AddDbContext<AppDataContext>(options =>
                options.UseMySql(configuration.GetConnectionString("ConnMySql")));
    }
}
