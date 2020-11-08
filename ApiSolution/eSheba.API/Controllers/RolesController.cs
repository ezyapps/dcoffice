
using AutoMapper;
using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
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