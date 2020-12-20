
using DAL.Entities;
using DAL.Entities.Enums;

namespace BLL.DTO
{
    public class Contact
    {
        public ContactType Kind { get; set; }
        public string Value { get; set; }
    }
}
