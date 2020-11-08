using System;
using System.Collections.Generic;
using eSheba.API.Shared.Models;

namespace eSheba.API.Dtos
{
    public class UserForDetailedDto: Entity
    {
        public UserForDetailedDto(string username, string gender, int age, string knownAs, DateTime created, DateTime lastActive, string introduction, string lookingFor, string interests, string city, string country, string photoUrl) 
        {
            this.Username = username;
                this.Gender = gender;
                this.Age = age;
                this.KnownAs = knownAs;
                this.Created = created;
                this.LastActive = lastActive;
                this.Introduction = introduction;
                this.LookingFor = lookingFor;
                this.Interests = interests;
                this.City = city;
                this.Country = country;
                this.PhotoUrl = photoUrl;
               
        }
                public string Username { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}