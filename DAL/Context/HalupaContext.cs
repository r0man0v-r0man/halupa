using DAL.Context.Extensions;
using DAL.Entities;
using DAL.Context.Interfaces;
using DAL.Entities.Configuration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace DAL.Context
{
    public class HalupaContext : IdentityDbContext<AppUser>, IHalupaContext
    {
        public DbSet<Advert> Adverts { get; set; }
        public HalupaContext(DbContextOptions<HalupaContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder?.ApplyConfiguration(new AdvertConfiguration());
            modelBuilder?.ApplyConfiguration(new PriceConfiguration());
            base.OnModelCreating(modelBuilder);
        }
        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            ChangeTracker.ApplyAuditableInformation();
            return await base.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
        }
    }
}
