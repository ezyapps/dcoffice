using System;
using System.Collections.Generic;
using eSheba.API.Data;
using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class Right: Entity
    {
        public string RightCode { get; set; }
        public string RightName { get; set; }
        public Guid CreatedById { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid RoleGroupId { get; set; }

    }
}