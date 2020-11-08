using System;
using System.Collections.Generic;
using System.Text;

namespace eSheba.API.GeoLocation.Models
{
    public class GeoDistrict: GeoDivision
    {
        public string ParentCode { get; set; }
    }
}
