using System;
using eSheba.API.Data;

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