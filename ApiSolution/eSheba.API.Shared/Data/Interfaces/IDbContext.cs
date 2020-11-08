using eSheba.API.Shared.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.Shared.Data.Interfaces
{
    public interface IDbContext: IDisposable
    {
        DbContext Instance { get; }
    }
}
