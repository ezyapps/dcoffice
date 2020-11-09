using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.Core.Services
{
    public class RightGroupService : BaseRepo<RightGroup>, IRightGroupService
    {
        public RightGroupService(IAppDbContext context) : base(context)
        {
        }

        public async Task<IList<RightGroup>> GetGroupsByApplication(string appCode)
        {
            return await GetRepo().Where(x => x.AppCode == appCode).ToListAsync();
        }

    }
}
