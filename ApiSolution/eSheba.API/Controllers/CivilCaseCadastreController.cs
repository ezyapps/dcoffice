using AutoMapper;
using eSheba.API.CivilSuite.Models;
using eSheba.API.Shared.Data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CivilCaseCadastreController: BaseRESTController<CivilCaseCadastre>
    {
        
        public CivilCaseCadastreController(IRepo<CivilCaseCadastre> repo, IMapper mapper, IConfiguration config) 
        : base(repo, mapper, config)
        {
        }
    }
}