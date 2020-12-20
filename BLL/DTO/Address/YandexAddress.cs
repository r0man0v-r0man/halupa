using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public class YandexAddress
    {
        public int? Id { get; set; }
        public int? GeoObjectId { get; set; }
        public GeoObject GeoObject { get; set; }

    }
}