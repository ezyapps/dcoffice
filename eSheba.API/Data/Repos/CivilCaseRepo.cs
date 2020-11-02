using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eSheba.API.Data.Interfaces;
using eSheba.API.Models;

namespace eSheba.API.Data.Repos
{
    public class CivilCaseRepo : BaseRepo<CivilCase>, ICivilCaseRepo
    {
        public CivilCaseRepo(DataContext context) : base(context)
        {
        }
    }
}