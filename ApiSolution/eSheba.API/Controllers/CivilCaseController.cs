using AutoMapper;
using eSheba.API.CivilSuite.Models;
using eSheba.API.Shared.Controllers;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CivilCaseController : BaseRESTController<CivilCase>
    {
        public CivilCaseController(IRepo<CivilCase> repo, IMapper mapper, IConfiguration config) 
        : base(repo, mapper, config)
        {
        }
    }
}