﻿using DAL.Entities.Enums;

namespace DAL.Entities
{
    public class Area
    {
        public int Id { get; set; }
        public AreaType Kind { get; set; }
        public int Value { get; set; }
    }
}