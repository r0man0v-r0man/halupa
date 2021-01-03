using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public record Point
    {
        public int? Id { get; set; }
        public string Pos { get; set; }

    }
}