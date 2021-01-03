namespace BLL.DTO.Address
{
    public record YandexAddress
    {
        public int? Id { get; set; }
        public int? GeoObjectId { get; set; }
        public GeoObject GeoObject { get; set; }

    }
}