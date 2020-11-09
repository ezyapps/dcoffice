using eSheba.API.Core.Models;
using eSheba.API.Shared.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eSheba.API.Core.Interfaces
{
    public interface IRightGroupService: IRepo<RightGroup>
    {
        Task<IList<RightGroup>> GetGroupsByApplication(string appCode);
    }
}
