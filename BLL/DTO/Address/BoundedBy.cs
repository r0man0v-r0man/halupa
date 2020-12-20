﻿using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public class BoundedBy
    {
        public int? Id { get; set; }
        public int? EnvelopeId { get; set; }
        public Envelope Envelope { get; set; }

    }
}