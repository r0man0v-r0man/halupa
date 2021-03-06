﻿using DAL.Entities.Enums;

namespace DAL.Entities
{
    public class Price
    {
        public int Id { get; set; }
        public CurrencyType Currency { get; set; }
        public decimal Value { get; set; }
        public int AdvertId { get; set; }
        public Advert Advert { get; set; }
    }
}