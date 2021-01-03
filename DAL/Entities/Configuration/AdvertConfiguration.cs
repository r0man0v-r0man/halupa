using DAL.Entities.Address;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DAL.Entities.Configuration
{
    public class AdvertConfiguration : IEntityTypeConfiguration<Advert>
    {
        public void Configure(EntityTypeBuilder<Advert> builder)
        {
            builder?
                .HasOne(prop => prop.AppUser)
                .WithMany(prop => prop.Adverts)
                .HasForeignKey(prop => prop.AppUserId)
                .OnDelete(DeleteBehavior.Restrict);
            builder?
                .HasOne(prop => prop.Description)
                .WithOne()
                .HasForeignKey<Advert>(prop => prop.DescriptionId)
                .OnDelete(DeleteBehavior.Restrict);
            builder?
                .HasOne(prop => prop.YandexAddress)
                .WithOne()
                .HasForeignKey<Advert>(prop => prop.YandexAddressId)
                .OnDelete(DeleteBehavior.Restrict);
            builder?
                .HasMany(prop => prop.Prices)
                .WithOne(prop => prop.Advert)
                .HasForeignKey(prop => prop.AdvertId)
                .OnDelete(DeleteBehavior.Cascade);
            builder?
                .HasMany(prop => prop.Areas)
                .WithOne(prop => prop.Advert)
                .HasForeignKey(prop => prop.AdvertId)
                .OnDelete(DeleteBehavior.Cascade);
            builder?
                .HasMany(prop => prop.Contacts)
                .WithOne(prop => prop.Advert)
                .HasForeignKey(prop => prop.AdvertId)
                .OnDelete(DeleteBehavior.Cascade);
            builder?
                .HasMany(prop => prop.Images)
                .WithOne(prop => prop.Advert)
                .HasForeignKey(prop => prop.AdvertId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
