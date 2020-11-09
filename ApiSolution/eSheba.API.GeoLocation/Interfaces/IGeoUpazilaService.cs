using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.GeoLocation.Interfaces
{
    public interface IGeoUpazilaService: IRepo<GeoUpazila>
    {
        Task<GeoUpazila> GetByCode(string code);
        Task<IList<GeoUpazila>> GetAllByParentCode(string parentCode);
    }
}
