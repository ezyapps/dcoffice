using eSheba.API.GeoLocation.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace eSheba.API.GeoLocation.DTOs
{
    public class GeoDistrictDto: GeoDistrict
    {
        public string ParentName { get; set; }
    }
}
