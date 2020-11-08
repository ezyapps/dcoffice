using System;
using System.Collections.Generic;
using eSheba.API.Data;
using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class Role: Entity
    {
        public string RoleName { get; set; }
        public Guid CreatedById { get; set; }
        public DateTime DateCreated { get; set; }
        
    }
}