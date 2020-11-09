using System;
using eSheba.API.Data;
using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class RoleRights: Entity
    {
        public Guid RoleId { get; set; }
        public Guid RightId { get; set; }
        public Guid AssignedBy { get; set; }
        public DateTime AssignTime { get; set; }
        public bool IsActive { get; set; }
        public RoleRights()
        {
            this.AssignTime = DateTime.Now;
            this.IsActive = true;
        }
    }
}