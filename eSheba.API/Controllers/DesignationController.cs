using System.Threading.Tasks;
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
    public class DesignationController: ControllerBase
    {
        private readonly IDesignationRepo _repo;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        public DesignationController(IDesignationRepo repo, IMapper mapper, IConfiguration config)
        {
            _config = config;
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll() {
            var designs = await _repo.GetAll();
            return Ok(designs);
        }
        [HttpPost]
        public async Task<IActionResult> Create(Designation model) {
            if(ModelState.IsValid){
                await _repo.Add(model);
                await _repo.SaveAll();
                return StatusCode(201);
            }else
            {
                return BadRequest("Invalid Input");
            }
            
        }
    }
}