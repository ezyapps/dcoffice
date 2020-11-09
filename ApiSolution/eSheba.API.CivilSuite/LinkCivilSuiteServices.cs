using eSheba.API.CivilSuite.Interfaces;
using eSheba.API.CivilSuite.Services;
using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace eSheba.API.CivilSuite
{
    public static class LinkCivilSuiteServices
    {
        public static void LinkRepos(IServiceCollection services)
        {
            services.AddScoped<ICivilCaseService, CivilCaseService>();
            services.AddScoped<ICivilCaseCadstreService, CivilCaseCadastreService>();
        }
    }
}
