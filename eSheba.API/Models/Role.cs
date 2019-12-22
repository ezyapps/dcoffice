using System;
using System.Collections.Generic;
using eSheba.API.Data;

namespace eSheba.API.Models
{
    public class Role: Entity
    {
        public string RoleName { get; set; }
        public User CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public ICollection<Right> Rights { get; set; }
    }
}