using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public record Component
    {
        public int? Id { get; set; }
        
        public string Kind { get; set; }
        public string Name { get; set; }

    }
}