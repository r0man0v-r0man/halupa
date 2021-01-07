using DAL.Context.Extensions;
using DAL.Entities;
using DAL.Entities.Address;
using DAL.Entities.Configuration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace DAL.Context
{
    public class HalupaContext : IdentityDbContext<AppUser>
    {
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<Area> Areas { get; set; }
        public DbSet<YandexAddress> YandexAddresses { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Description> Descriptions { get; set; }
        public DbSet<UploadImage> Images { get; set; }
        public DbSet<Price> Prices { get; set; }
        public HalupaContext(DbContextOptions<HalupaContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder?.ApplyConfiguration(new AdvertConfiguration());
            modelBuilder?.ApplyConfiguration(new PriceConfiguration());

        }
        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            ChangeTracker.ApplyAuditableInformation();
            return await base.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
        }
    }
}
