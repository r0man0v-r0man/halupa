﻿// <auto-generated />
using System;
using DAL.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DAL.Migrations
{
    [DbContext(typeof(HalupaContext))]
    partial class HalupaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("DAL.Entities.Address.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Country_code")
                        .HasColumnType("text");

                    b.Property<string>("Formatted")
                        .HasColumnType("text");

                    b.Property<string>("Postal_code")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("DAL.Entities.Address.BoundedBy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("EnvelopeId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("EnvelopeId");

                    b.ToTable("BoundedBy");
                });

            modelBuilder.Entity("DAL.Entities.Address.Component", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int?>("AddressId")
                        .HasColumnType("integer");

                    b.Property<string>("Kind")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.ToTable("Component");
                });

            modelBuilder.Entity("DAL.Entities.Address.Envelope", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("LowerCorner")
                        .HasColumnType("text");

                    b.Property<string>("UpperCorner")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Envelope");
                });

            modelBuilder.Entity("DAL.Entities.Address.GeoObject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("BoundedById")
                        .HasColumnType("integer");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("MetaDataPropertyId")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int>("PointId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("BoundedById");

                    b.HasIndex("MetaDataPropertyId");

                    b.HasIndex("PointId");

                    b.ToTable("GeoObject");
                });

            modelBuilder.Entity("DAL.Entities.Address.GeocoderMetaData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("AddressId")
                        .HasColumnType("integer");

                    b.Property<string>("Kind")
                        .HasColumnType("text");

                    b.Property<string>("Precision")
                        .HasColumnType("text");

                    b.Property<string>("Text")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.ToTable("GeocoderMetaData");
                });

            modelBuilder.Entity("DAL.Entities.Address.MetaDataProperty", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("GeocoderMetaDataId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("GeocoderMetaDataId");

                    b.ToTable("MetaDataProperty");
                });

            modelBuilder.Entity("DAL.Entities.Address.Point", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Pos")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Point");
                });

            modelBuilder.Entity("DAL.Entities.Address.YandexAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("GeoObjectId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("GeoObjectId");

                    b.ToTable("YandexAddress");
                });

            modelBuilder.Entity("DAL.Entities.Advert", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int?>("AddressId")
                        .HasColumnType("integer");

                    b.Property<string>("AppUserId")
                        .HasColumnType("text");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int?>("DescriptionId")
                        .HasColumnType("integer");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<DateTime>("LastModified")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.HasIndex("AppUserId");

                    b.HasIndex("DescriptionId");

                    b.ToTable("Adverts");
                });

            modelBuilder.Entity("DAL.Entities.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("DAL.Entities.Area", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int?>("AdvertId")
                        .HasColumnType("integer");

                    b.Property<int>("Kind")
                        .HasColumnType("integer");

                    b.Property<int>("Value")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("AdvertId");

                    b.ToTable("Area");
                });

            modelBuilder.Entity("DAL.Entities.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int?>("AdvertId")
                        .HasColumnType("integer");

                    b.Property<int>("Kind")
                        .HasColumnType("integer");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AdvertId");

                    b.ToTable("Contact");
                });

            modelBuilder.Entity("DAL.Entities.Description", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Description");
                });

            modelBuilder.Entity("DAL.Entities.Image", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int?>("AdvertId")
                        .HasColumnType("integer");

                    b.Property<string>("DeleteHash")
                        .HasColumnType("text");

                    b.Property<long>("Size")
                        .HasColumnType("bigint");

                    b.Property<string>("Uid")
                        .HasColumnType("text");

                    b.Property<string>("Url")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AdvertId");

                    b.ToTable("Image");
                });

            modelBuilder.Entity("DAL.Entities.Price", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int?>("AdvertId")
                        .HasColumnType("integer");

                    b.Property<int>("Currency")
                        .HasColumnType("integer");

                    b.Property<decimal>("Value")
                        .HasColumnType("money");

                    b.HasKey("Id");

                    b.HasIndex("AdvertId");

                    b.ToTable("Price");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .HasColumnType("text");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("DAL.Entities.Address.BoundedBy", b =>
                {
                    b.HasOne("DAL.Entities.Address.Envelope", "Envelope")
                        .WithMany()
                        .HasForeignKey("EnvelopeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Envelope");
                });

            modelBuilder.Entity("DAL.Entities.Address.Component", b =>
                {
                    b.HasOne("DAL.Entities.Address.Address", null)
                        .WithMany("Components")
                        .HasForeignKey("AddressId");
                });

            modelBuilder.Entity("DAL.Entities.Address.GeoObject", b =>
                {
                    b.HasOne("DAL.Entities.Address.BoundedBy", "BoundedBy")
                        .WithMany()
                        .HasForeignKey("BoundedById")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.Address.MetaDataProperty", "MetaDataProperty")
                        .WithMany()
                        .HasForeignKey("MetaDataPropertyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.Address.Point", "Point")
                        .WithMany()
                        .HasForeignKey("PointId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BoundedBy");

                    b.Navigation("MetaDataProperty");

                    b.Navigation("Point");
                });

            modelBuilder.Entity("DAL.Entities.Address.GeocoderMetaData", b =>
                {
                    b.HasOne("DAL.Entities.Address.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");
                });

            modelBuilder.Entity("DAL.Entities.Address.MetaDataProperty", b =>
                {
                    b.HasOne("DAL.Entities.Address.GeocoderMetaData", "GeocoderMetaData")
                        .WithMany()
                        .HasForeignKey("GeocoderMetaDataId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GeocoderMetaData");
                });

            modelBuilder.Entity("DAL.Entities.Address.YandexAddress", b =>
                {
                    b.HasOne("DAL.Entities.Address.GeoObject", "GeoObject")
                        .WithMany()
                        .HasForeignKey("GeoObjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GeoObject");
                });

            modelBuilder.Entity("DAL.Entities.Advert", b =>
                {
                    b.HasOne("DAL.Entities.Address.YandexAddress", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId");

                    b.HasOne("DAL.Entities.AppUser", "AppUser")
                        .WithMany("Adverts")
                        .HasForeignKey("AppUserId");

                    b.HasOne("DAL.Entities.Description", "Description")
                        .WithMany()
                        .HasForeignKey("DescriptionId");

                    b.Navigation("Address");

                    b.Navigation("AppUser");

                    b.Navigation("Description");
                });

            modelBuilder.Entity("DAL.Entities.Area", b =>
                {
                    b.HasOne("DAL.Entities.Advert", null)
                        .WithMany("Areas")
                        .HasForeignKey("AdvertId");
                });

            modelBuilder.Entity("DAL.Entities.Contact", b =>
                {
                    b.HasOne("DAL.Entities.Advert", null)
                        .WithMany("Contacts")
                        .HasForeignKey("AdvertId");
                });

            modelBuilder.Entity("DAL.Entities.Image", b =>
                {
                    b.HasOne("DAL.Entities.Advert", null)
                        .WithMany("Images")
                        .HasForeignKey("AdvertId");
                });

            modelBuilder.Entity("DAL.Entities.Price", b =>
                {
                    b.HasOne("DAL.Entities.Advert", null)
                        .WithMany("Prices")
                        .HasForeignKey("AdvertId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("DAL.Entities.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("DAL.Entities.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAL.Entities.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("DAL.Entities.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DAL.Entities.Address.Address", b =>
                {
                    b.Navigation("Components");
                });

            modelBuilder.Entity("DAL.Entities.Advert", b =>
                {
                    b.Navigation("Areas");

                    b.Navigation("Contacts");

                    b.Navigation("Images");

                    b.Navigation("Prices");
                });

            modelBuilder.Entity("DAL.Entities.AppUser", b =>
                {
                    b.Navigation("Adverts");
                });
#pragma warning restore 612, 618
        }
    }
}
