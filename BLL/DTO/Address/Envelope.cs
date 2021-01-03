using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public record Envelope
    {
        public int? Id { get; set; }
        public string LowerCorner { get; set; }
        public string UpperCorner { get; set; }

    }
}