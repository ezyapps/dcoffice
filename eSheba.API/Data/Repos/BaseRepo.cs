using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Data.Interfaces;
using eSheba.API.Models;
using Microsoft.EntityFrameworkCore;

namespace eSheba.API.Data.Repos
{
    public class BaseRepo<T> : IRepo<T> where T : Entity
    {
        protected readonly DataContext _context;
        public BaseRepo(DataContext context)
        {
            _context = context;
        }
        public async Task<T> Add(T entity)
        {
            await _context.AddAsync(entity);
            return entity;
        }

        public void Delete(T entity)
        {
           _context.Remove(entity);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync() ;
        }

        public async Task<T> GetT(int id)
        {
            return await _context.Set<T>().SingleOrDefaultAsync( i => i.Id == id);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}