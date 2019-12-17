using System.Threading.Tasks;

namespace eSheba.API.Data
{
    public interface IRepo<T> where T: class 
    {
         void Add(T entity);
         void Delete(T entity);
         Task<bool> SaveAll();
    }
}