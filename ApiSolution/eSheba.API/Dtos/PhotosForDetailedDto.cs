using System;
using eSheba.API.Data;
using eSheba.API.Shared.Models;

namespace eSheba.API.Dtos
{
    public class PhotosForDetailedDto: Entity
    {
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public Boolean IsMain { get; set; }
    }
}