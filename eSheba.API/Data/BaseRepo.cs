using System.Threading.Tasks;

namespace eSheba.API.Data
{
    public class BaseRepo<T> : IRepo<T> where T : class
    {
        protected readonly DataContext _context;
        public BaseRepo(DataContext context)
        {
            _context = context;
        }
        public void Add(T entity)
        {
            _context.Add(entity);
        }

        public void Delete(T entity)
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}