using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.GeoLocation.Interfaces
{
    public interface IGeoDivisionService: IRepo<GeoDivision>
    {
        Task<GeoDivision> GetByCode(string code);
    }
}
