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
    public class GeoDistrictService : BaseRepo<GeoDistrict>, IGeoDistrictService
    {
        public GeoDistrictService(IAppDbContext context) : base(context)
        {
            
        }

        public async Task<IList<GeoDistrict>> GetAllByParentCode(string parentCode)
        {
            return await GetRepo().Where(x => x.ParentCode == parentCode).ToListAsync();
        }

        public async Task<GeoDistrict> GetByCode(string code)
        {
            return await GetRepo().Where(x => x.Code == code).FirstOrDefaultAsync();
        }
    }
}
