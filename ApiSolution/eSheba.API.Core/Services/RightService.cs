using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Data.Interfaces;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eSheba.API.Core.Services
{
    public class RightService: BaseRepo<Right>, IRightService
    {
        public RightService(IAppDbContext context): base(context)
        {
            
        }

    }
}