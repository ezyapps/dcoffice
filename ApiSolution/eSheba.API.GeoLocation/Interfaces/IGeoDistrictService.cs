using eSheba.API.GeoLocation.DTOs;
using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.GeoLocation.Interfaces
{
    public interface IGeoDistrictService: IRepo<GeoDistrict>
    {
        Task<GeoDistrict> GetByCode(string code);
        Task<IList<GeoDistrict>> GetAllByParentCode(string parentCode);
        Task<IList<GeoDistrictDto>> GetAllWithParent();
    }
}
