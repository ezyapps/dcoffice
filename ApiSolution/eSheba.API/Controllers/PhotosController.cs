using AutoMapper;
using eSheba.API.Core.Interfaces;
using eSheba.API.Data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace eSheba.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IUserService _userRepo;
        private readonly IMapper _mapper;
        public PhotosController(IUserService userRepo, IMapper mapper)
        {
          this._userRepo = userRepo;
          this._mapper = mapper;   
        }
        
    }
}