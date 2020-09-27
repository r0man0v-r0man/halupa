using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using DAL.Entities;

namespace Adv.DAL.Entities
{
    public class AppUser : IdentityUser
    {
        public List<Advert> Adverts { get; }
    }
}
