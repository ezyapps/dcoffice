using eSheba.API.CivilSuite;
using eSheba.API.Core;
using eSheba.API.GeoLocation;
using eSheba.API.Infra;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace eSheba.API
{
    public static class StartupRepo
    {
        public static void LinkRepos(IServiceCollection services)
        {
            services.AddScoped<IAppDbContext, AppDataContext>();
            LinkCoreServices.LinkRepos(services);
            LinkCivilSuiteServices.LinkRepos(services);
            LinkGeoLocationServices.LinkRepos(services);
        }
    }
}