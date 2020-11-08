using System;
using eSheba.API.Data;
using eSheba.API.Shared.Models;

namespace eSheba.API.Core.Models
{
    public class Photo: Entity
    {
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public Boolean IsMain { get; set; }
        public User User { get; set; }
        public Guid UserId { get; set; }
    }
}