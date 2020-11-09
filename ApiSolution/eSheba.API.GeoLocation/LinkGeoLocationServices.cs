using eSheba.API.GeoLocation.Interfaces;
using eSheba.API.GeoLocation.Services;
using Microsoft.Extensions.DependencyInjection;

namespace eSheba.API.GeoLocation
{
    public static class LinkGeoLocationServices
    {
        public static void LinkRepos(IServiceCollection services)
        {
            services.AddScoped<IGeoDivisionService, GeoDivisionService>();
            services.AddScoped<IGeoDistrictService, GeoDistrictService>();
            services.AddScoped<IGeoUpazilaService, GeoUpazilaService>();
            services.AddScoped<IGeoUnionService, GeoUnionService>();
            services.AddScoped<IGeoMouzaService, GeoMouzaService>();
        }
    }
}
