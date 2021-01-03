using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public record MetaDataProperty
    {
        public int? Id { get; set; }
        public int? GeocoderMetaDataId { get; set; }
        public GeocoderMetaData GeocoderMetaData { get; set; }

    }
}