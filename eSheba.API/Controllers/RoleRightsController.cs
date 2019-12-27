using AutoMapper;
using eSheba.API.Data.Interfaces;
using eSheba.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class RoleRightsController : BaseRESTController<RoleRights>
    {
        public RoleRightsController(IRepo<RoleRights> repo, IMapper mapper, IConfiguration config) : base(repo, mapper, config)
        {
        }
    }
}