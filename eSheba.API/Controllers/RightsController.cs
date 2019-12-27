using AutoMapper;
using eSheba.API.Data.Interfaces;
using eSheba.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RightsController : BaseRESTController<Right>
    {
        public RightsController(IRepo<Right> repo, IMapper mapper, IConfiguration config) : base(repo, mapper, config)
        {
        }
    }
}