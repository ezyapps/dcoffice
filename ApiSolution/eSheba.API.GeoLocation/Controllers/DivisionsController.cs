using AutoMapper;
using eSheba.API.GeoLocation.Interfaces;
using eSheba.API.GeoLocation.Models;
using eSheba.API.Shared.Controllers;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.GeoLocation.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DivisionsController : BaseRESTController<GeoDivision>
    {
        public DivisionsController(IGeoDivisionService repo, IMapper mapper, IConfiguration config) : base(repo, mapper, config)
        {
        }
    }
}
