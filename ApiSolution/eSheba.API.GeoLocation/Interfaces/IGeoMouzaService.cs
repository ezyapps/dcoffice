using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.GeoLocation.Interfaces
{
    public interface IGeoMouzaService: IRepo<GeoMouza>
    {
        Task<GeoMouza> GetByCode(string code);
        Task<string> GetGLCodeByCode(string code);
        Task<IList<GeoMouza>> GetAllByUnionCode(string unionCode);
    }
}
