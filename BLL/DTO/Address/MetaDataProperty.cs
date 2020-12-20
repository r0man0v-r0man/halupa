using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public class MetaDataProperty
    {
        public int? Id { get; set; }
        public int? GeocoderMetaDataId { get; set; }
        public GeocoderMetaData GeocoderMetaData { get; set; }

    }
}