using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.GeoLocation.Interfaces
{
    public interface IGeoUnionService: IRepo<GeoUnion>
    {
        Task<GeoUnion> GetByCode(string code);
        Task<IList<GeoUnion>> GetAllByParentCode(string parentCode);
    }
}
