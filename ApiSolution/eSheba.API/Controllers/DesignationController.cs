using System.Threading.Tasks;
using AutoMapper;
using eSheba.API.Core.Interfaces;
using eSheba.API.Core.Models;
using eSheba.API.Shared.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DesignationController: BaseRESTController<Designation>
    {
        //private readonly IDesignationRepo _repo;
        //private readonly IMapper _mapper;
        //private readonly IConfiguration _config;
        public DesignationController(IDesignationService repo, IMapper mapper, IConfiguration config): base(repo,mapper,config)
        {
            /*
            _config = config;
            _mapper = mapper;
            _repo = repo;
            */
        }
        /*
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
                //return StatusCode(201);
                return Ok(model);
            }else
            {
                return BadRequest("Invalid Input");
            }
            
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id) {
            var designs = await _repo.Get(id);
            if(designs != null) {
                _repo.Delete(designs);
                await _repo.SaveAll();
            }                
            else 
                return BadRequest("Sorry! No user found for the provided id.");
            return Ok(designs);
        }
        */
    }
}