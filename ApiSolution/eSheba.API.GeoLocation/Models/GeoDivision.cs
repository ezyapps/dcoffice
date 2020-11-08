using eSheba.API.Shared.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace eSheba.API.GeoLocation.Models
{
    public class GeoDivision: Entity
    {
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
