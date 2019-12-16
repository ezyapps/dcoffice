using AutoMapper;
using eSheba.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace eSheba.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;
        public PhotosController(IUserRepo userRepo, IMapper mapper)
        {
          this._userRepo = userRepo;
          this._mapper = mapper;   
        }
        
    }
}