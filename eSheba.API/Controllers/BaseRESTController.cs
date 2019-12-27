using System;
using System.Threading.Tasks;
using AutoMapper;
using eSheba.API.Data;
using eSheba.API.Data.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace eSheba.API.Controllers
{
    public class BaseRESTController<T>: ControllerBase where T: Entity
    {
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        private readonly IRepo<T> _repo;
        public BaseRESTController(IRepo<T> repo, IMapper mapper, IConfiguration config)
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
        public async Task<IActionResult> Create(T model) {
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
        [HttpPut]
        public async Task<IActionResult> Update(T model) {
            if(ModelState.IsValid){
                var entity = _repo.Edit(model);
                if( entity != null ) {
                    await _repo.SaveAll();
                    return Ok(entity);
                }
            }
            return BadRequest("Invalid Input");
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(Guid id) {
            var model = await _repo.Get(id);
            if(model != null) {
                _repo.Delete(model);
                await _repo.SaveAll();
            }                
            else 
                return BadRequest("Sorry! No data found for the provided id.");
            return Ok(model);
        }
    }
}