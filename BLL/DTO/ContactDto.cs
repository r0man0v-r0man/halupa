
using DAL.Entities;

namespace BLL.DTO
{
    public class ContactDto
    {
        public string Phone { get; set; }

        public static implicit operator ContactDto(Contact contact) => new ContactDto
        {
            Phone = contact?.Phone
        };

        public static implicit operator Contact(ContactDto contactDto) => contactDto != null
                ? new ContactDto
                {
                    Phone = contactDto?.Phone
                }
                : new ContactDto();
    }
}
