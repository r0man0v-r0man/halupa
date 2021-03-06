﻿using DAL.Entities.Enums;

namespace DAL.Entities
{
    public class Contact
    {
        public int Id { get; set; }
        public ContactType Kind{ get; set; }
        public string Value { get; set; }
        public int AdvertId { get; set; }
        public Advert Advert { get; set; }
    }
}