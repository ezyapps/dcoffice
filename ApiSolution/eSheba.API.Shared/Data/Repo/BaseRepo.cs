using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Models;

using Microsoft.EntityFrameworkCore;

namespace eSheba.API.Shared.Repos
{
    public class BaseRepo<T> : IRepo<T> where T : Entity
    {
        protected readonly IAppDbContext _context;
        public BaseRepo(IAppDbContext context)
        {
            _context = context;
        }
        public async Task<T> Add(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            return entity;
        }

        public void Delete(T entity)
        {
           _context.Set<T>().Remove(entity);
        }
        public void Delete(Guid id) {
            _context.Set<T>().Remove(Get(id).GetAwaiter().GetResult());
        }
        public async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync() ;
        }

        public async Task<T> Get(Guid id)
        {
            return await _context.Set<T>().SingleOrDefaultAsync( i => i.Id == id);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public T Edit(T entity)
        {
            return _context.Set<T>().Update(entity).Entity;
        }
    }
}