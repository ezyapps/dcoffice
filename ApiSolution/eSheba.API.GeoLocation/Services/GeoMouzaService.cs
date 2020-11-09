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
    public class GeoMouzaService : BaseRepo<GeoMouza>, IGeoMouzaService
    {
        public GeoMouzaService(IAppDbContext context) : base(context)
        {
        }

        public async Task<IList<GeoMouza>> GetAllByUnionCode(string unionCode)
        {
            return await GetRepo().Where(x => x.UnionCode == unionCode).ToListAsync<GeoMouza>();
        }

        public async Task<GeoMouza> GetByCode(string code)
        {
            return await GetRepo().Where(x => x.Code == code).FirstOrDefaultAsync();
        }

        public async Task<string> GetGLCodeByCode(string code)
        {
            return await GetRepo().Where(x => x.Code == code).Select(c=>c.JLNo).FirstOrDefaultAsync();
        }
    }
}
