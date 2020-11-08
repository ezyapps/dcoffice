using System;

using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class UserRoles: Entity
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }        
    }
}