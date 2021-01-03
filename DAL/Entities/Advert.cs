using DAL.Entities;
using DAL.Entities.Address;
using DAL.Entities.Common;
using System;
using System.Collections.Generic;

namespace DAL.Entities
{
    public class Advert : AuditableEntity
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public bool IsActive { get; set; }
        public int YandexAddressId { get; set; }
        public YandexAddress YandexAddress { get; set; }
        public int DescriptionId { get; set; }
        public Description Description { get; set; }
        public ICollection<Image> Images { get; set; }
        public ICollection<Price> Prices { get; set; }
        public ICollection<Area> Areas { get; set; }
        public ICollection<Contact> Contacts { get; set; }
    }
}
