using System.Collections.Generic;

namespace DAL.Entities.Address
{
    public record Address
    {
        public int Id { get; set; }
        public string Country_code { get; set; }
        public string Postal_code { get; set; }
        public string Formatted { get; set; }
        public ICollection<Component> Components { get; set; }
    }
}