using System;
using eSheba.API.Data;

namespace eSheba.API.Models
{
    public class RoleRights: Entity
    {
        public Guid RoleId { get; set; }
        public Guid RightId { get; set; }
    }
}