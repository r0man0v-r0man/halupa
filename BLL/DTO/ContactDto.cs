
using DAL.Entities;
using DAL.Entities.Enums;

namespace BLL.DTO
{
    public class ContactDto
    {
        public ContactType Kind { get; set; }
        public string Value { get; set; }

        public static implicit operator ContactDto(Contact contact) => new ContactDto
        {
            Value = contact?.Value,
            Kind = contact.Kind
        };

        public static implicit operator Contact(ContactDto contactDto) => contactDto != null
        ? new Contact
        {
            Value = contactDto?.Value,
            Kind = contactDto.Kind
        }
        : new Contact();
    }
}
