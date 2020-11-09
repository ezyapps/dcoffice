using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using eSheba.API.Data;
using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class Right: Entity
    {
        [Required]
        public string Code { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public Guid CreatedById { get; set; }
        public DateTime DateCreated { get; set; }
        [Required]
        public Guid RoleGroupId { get; set; }
        public Right()
        {
            this.DateCreated = DateTime.Now;
        }

    }
}