using eSheba.API.GeoLocation.Interfaces;
using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.GeoLocation.Services
{
    public class GeoUnionService : BaseRepo<GeoUnion>, IGeoUnionService
    {
        public GeoUnionService(IAppDbContext context) : base(context)
        {
        }

        public async Task<IList<GeoUnion>> GetAllByParentCode(string parentCode)
        {
            return await GetRepo().Where(x => x.ParentCode == parentCode).ToListAsync();
        }

        public async Task<GeoUnion> GetByCode(string code)
        {
            return await GetRepo().Where(x => x.Code == code).FirstOrDefaultAsync();
        }
    }
}
