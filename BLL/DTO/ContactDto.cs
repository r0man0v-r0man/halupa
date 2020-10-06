
using DAL.Entities;

namespace BLL.DTO
{
    public class ContactDto
    {
        public string[] Phones { get; set; }

        public static implicit operator ContactDto(Contact contact) => new ContactDto
        {
            Phones = contact?.Phones
        };

        public static implicit operator Contact(ContactDto contactDto) => new Contact
        {
            Phones = contactDto?.Phones
        };
    }
}
