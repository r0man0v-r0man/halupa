using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Image
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public int AdvertId { get; set; }
        public Advert Advert { get; set; }
    }
}
