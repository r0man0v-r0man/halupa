using System.Collections.Generic;
using System.Linq;
using DAL.Entities.Address;

namespace BLL.DTO.Address
{
    public record Address
    {
        public int? Id { get; set; }
        public string Country_code { get; set; }
        public string Postal_code { get; set; }
        public string Formatted { get; set; }
        public IList<Component> Components { get; set; }

    }
}