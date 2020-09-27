using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Context.Interfaces
{
    public interface IHalupaContext : IBaseContext
    {
        DbSet<Advert> Adverts { get; set; }
    }
}
