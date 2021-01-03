using System.Collections.Generic;
using BLL.DTO.Address;
using DAL.Entities.Common;
namespace BLL.DTO
{
    public class Advert : AuditableEntity
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public bool IsActive { get; set; }
        public YandexAddress YandexAddress { get; set; }
        public List<Image> Images { get; set; }
        public List<Price> Prices { get; set; }
        public Description Description { get; set; }
        public List<Area> Areas { get; set; }
        public List<Contact> Contacts { get; set; }

    }
}
