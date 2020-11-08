using System.Threading.Tasks;
using eSheba.API.Core.Models;

namespace eSheba.API.Core.Interfaces
{
    public interface IAuthService
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}