using System;

using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class UserRoles: Entity
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
        public Guid AssignedBy { get; set; }
        public DateTime AssignTime { get; set; }
        public bool IsActive { get; set; }
        public UserRoles()
        {
            this.AssignTime = DateTime.Now;
            this.IsActive = true;
        }
    }
}