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
    public class CivilCaseCadastreController: BaseRESTController<CivilCaseCadastre>
    {
        
        public CivilCaseCadastreController(IRepo<CivilCaseCadastre> repo, IMapper mapper, IConfiguration config) 
        : base(repo, mapper, config)
        {
        }
    }
}