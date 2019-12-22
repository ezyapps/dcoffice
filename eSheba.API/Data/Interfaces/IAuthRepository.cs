using System.Threading.Tasks;
using eSheba.API.Models;

namespace eSheba.API.Data.Interfaces
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}