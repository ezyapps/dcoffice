using System;
using eSheba.API.Data;
using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class RoleRights: Entity
    {
        public Guid RoleId { get; set; }
        public Guid RightId { get; set; }
    }
}