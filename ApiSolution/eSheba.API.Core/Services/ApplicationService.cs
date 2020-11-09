using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;
using System;
using System.Collections.Generic;
using System.Text;

namespace eSheba.API.Core.Services
{
    public class ApplicationService : BaseRepo<Application>, IApplicationService
    {
        public ApplicationService(IAppDbContext context) : base(context)
        {
        }
    }
}
