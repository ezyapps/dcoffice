using System;
using System.Collections.Generic;
using eSheba.API.Data;

namespace eSheba.API.Models
{
    public class User: Entity
    {
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public Guid DesignationId { get; set; }

    }
}