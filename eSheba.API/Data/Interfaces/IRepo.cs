using System.Collections.Generic;
using System.Threading.Tasks;

namespace eSheba.API.Data.Interfaces
{
    public interface IRepo<T> where T: Entity 
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> Get(int id);
        Task<T> Add(T entity);
        void Delete(T entity);
        void Delete(int id);
        T Edit(T entity);
        Task<bool> SaveAll();
    }
}