using Adv.DAL.Entities;
using Adv.DAL.Entities.Address;
using DAL.Entities.Common;
using System.Collections.Generic;

namespace DAL.Entities
{
    public class Advert : AuditableEntity
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public bool IsActive { get; set; }
        public YandexAddress Address { get; set; }
        public List<Image> Images { get; set; }
        public Price Price { get; set; }
        public Description Description { get; set; }
        public Area Area { get; set; }
        public Contact Contact { get; set; }
    }
}
