using eSheba.API.Data;
using eSheba.API.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eSheba.API.Core.Models
{
    public class RightGroup: Entity
    {
        public string GroupName { get; set; }
        public string Description { get; set; }
        public string AppCode { get; set; }
        public DateTime DateCreated { get; set; }
        public RightGroup()
        {
            this.DateCreated = DateTime.Now;
        }
    }
}
