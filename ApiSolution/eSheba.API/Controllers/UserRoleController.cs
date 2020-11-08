using AutoMapper;
using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserRoleController : BaseRESTController<UserRoles>
    {
        public UserRoleController(IUserRolesService repo, IMapper mapper, IConfiguration config) : base(repo, mapper, config)
        {
        }
    }
}