using System;
using eSheba.API.Data;

namespace eSheba.API.Models
{
    public class UserRoles: Entity
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }        
    }
}