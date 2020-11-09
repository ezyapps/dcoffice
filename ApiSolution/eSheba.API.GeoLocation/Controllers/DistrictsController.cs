using AutoMapper;
using eSheba.API.GeoLocation.Interfaces;
using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Controllers;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace eSheba.API.GeoLocation.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DistrictsController : BaseRESTController<GeoDistrict>
    {
        private IGeoDistrictService _distService;
        public DistrictsController(IGeoDistrictService repo, IMapper mapper, IConfiguration config) : base(repo, mapper, config)
        {
            this._distService = repo;
        }
        [HttpGet("withparent")]
        public async Task<IActionResult> GetAllWithParent()
        {
            var designs = await _distService.GetAllWithParent();
            return Ok(designs);
        }
    }
}
