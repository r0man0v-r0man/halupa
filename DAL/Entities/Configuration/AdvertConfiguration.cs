using Adv.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities.Configuration
{
    public class AdvertConfiguration : IEntityTypeConfiguration<Advert>
    {
        public void Configure(EntityTypeBuilder<Advert> builder)
        {
            builder?
                .Property(prop => prop.Id)
                .IsRequired();
            builder?
                .HasOne(prop => prop.AppUser)
                .WithMany(prop => prop.Adverts)
                .HasForeignKey(prop => prop.AppUserId);
            builder?
                .HasMany(prop => prop.Images)
                .WithOne(prop => prop.Advert)
                .HasForeignKey(prop => prop.AdvertId);
        }
    }
}
