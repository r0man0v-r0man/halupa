
using DAL.Entities;

namespace BLL.DTO
{
    public class ContactDto
    {
        public string[] Values { get; set; }

        public static implicit operator ContactDto(Contact contact) => new ContactDto
        {
            Values = contact?.Values
        };

        public static implicit operator Contact(ContactDto contactDto) => new Contact
        {
            Values = contactDto?.Values
        };
    }
}
