using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace DAL.Entities
{
    public class AppUser : IdentityUser
    {
        public List<Advert> Adverts { get; }
    }
}
