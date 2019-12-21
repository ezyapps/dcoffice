using System;
using eSheba.API.Data;

namespace eSheba.API.Models
{
    public class Right: Entity
    {
        public string RightCode { get; set; }
        public string RightName { get; set; }
        public User CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
    }
}