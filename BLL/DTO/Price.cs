using DAL.Entities.Enums;

namespace BLL.DTO
{
    public class Price
    {
        public CurrencyType Currency { get; set; }
        public decimal Value { get; set; }

    }
}
