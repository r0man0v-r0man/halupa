using DAL.Entities.Enums;

namespace BLL.DTO
{
    public class Price
    {
        public CurrencyType Currency { get; set; }
        public decimal Value { get; set; }

        //public static implicit operator Price(Price price) => new Price
        //{
        //    Currency = price.Currency,
        //    Value = price.Value
        //};

        //public static implicit operator Price(Price price) => new Price
        //{
        //    Currency = price.Currency,
        //    Value = price.Value
        //};
    }
}
