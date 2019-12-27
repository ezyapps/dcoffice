using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using eSheba.API.Data.Interfaces;
using eSheba.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace eSheba.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;
        public UsersController(IUserRepo userRepo, IMapper mapper)
        {
            _mapper = mapper;
            _userRepo = userRepo;
        }
        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userRepo.GetUsers();
            var usersForSend = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersForSend);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(Guid id)
        {
            var user = await _userRepo.GetUser(id);
            if (user == null)
                return BadRequest("Sorry! No user found.");
            var userToSend = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToSend);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, UserForUpdateDto userForDetailedDto){
            if(id != new Guid(User.FindFirst(ClaimTypes.NameIdentifier).Value)){
                return Unauthorized();
            }
            var userFromRepo = await _userRepo.GetUser(id);
            _mapper.Map(userForDetailedDto, userFromRepo);
            if(await _userRepo.SaveAll())
                return NoContent();
            throw new Exception($"Updating user {id} failed on saving.");
        }

    }
}