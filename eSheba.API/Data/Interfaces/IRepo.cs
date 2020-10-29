using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eSheba.API.Data.Interfaces
{
    public interface IRepo<T> where T: Entity 
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> Get(Guid id);
        Task<T> Add(T entity);
        void Delete(T entity);
        void Delete(Guid id);
        T Edit(T entity);
        Task<bool> SaveAll();
    }
}