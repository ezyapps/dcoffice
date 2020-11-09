using AutoMapper;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Controllers;
using eSheba.API.Shared.Data.Interfaces;
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