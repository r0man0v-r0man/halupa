using System;
using System.Collections.Generic;
using System.Text;
using DAL.Entities;
using DAL.Entities.Enums;

namespace BLL.DTO
{
    public class PriceDto
    {
        public CurrencyType Currency { get; set; }
        public decimal Value { get; set; }

        public static implicit operator Price(PriceDto price) => new Price
        {
            Currency = price.Currency,
            Value = price.Value
        };

        public static implicit operator PriceDto(Price price) => new PriceDto
        {
            Currency = price.Currency,
            Value = price.Value
        };
    }
}
