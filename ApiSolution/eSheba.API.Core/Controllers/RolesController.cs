
using AutoMapper;
using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Core.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : BaseRESTController<Role>
    {
        public RolesController(IRoleService repo, IMapper mapper, IConfiguration config) : base(repo, mapper, config)
        {
        }
    }
}