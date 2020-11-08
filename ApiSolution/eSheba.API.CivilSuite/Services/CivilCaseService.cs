using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.CivilSuite.Interfaces;
using eSheba.API.CivilSuite.Models;
using eSheba.API.Shared.Data.Interfaces;
using eSheba.API.Shared.Repos;

namespace eSheba.API.CivilSuite.Data.Repos
{
    public class CivilCaseService : BaseRepo<CivilCase>, ICivilCaseService
    {
        public CivilCaseService(IAppDbContext context) : base(context)
        {
        }
    }
}