﻿using DAL.Context;
using DAL.Entities;
using DAL.Repo;
using DAL.Repo.Interfaces;
using Imgur.API.Authentication;
using Imgur.API.Endpoints;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;

namespace DAL
{
    public static class DALServices
    {
        public static IServiceCollection AddDalServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContextFactory<HalupaContext>(options =>
            {
                options.UseSqlite(configuration.GetConnectionString("HalupaConnection"));
            });
            services
                .AddTransient(o => o.GetRequiredService<IDbContextFactory<HalupaContext>>().CreateDbContext());
            
            
            services.Configure<PasswordHasherOptions>(options =>
            {
                options.CompatibilityMode = PasswordHasherCompatibilityMode.IdentityV3;
            });
            services.AddIdentity<AppUser, IdentityRole>(config =>
            {
                config.Password.RequiredLength = 4;
                config.Password.RequireDigit = false;
                config.Password.RequireNonAlphanumeric = false;
                config.Password.RequireUppercase = false;
            })
                .AddEntityFrameworkStores<HalupaContext>()
                .AddDefaultTokenProviders();

            services.AddScoped(typeof(IUserRepo), typeof(UserRepo));
            services.AddScoped(typeof(IAdvertRepo), typeof(AdvertRepo));
            services.AddScoped(typeof(IFileRepo), typeof(FileRepo));

            var imgurClientId = configuration.GetValue<string>("Imgur:ClientId");
            var imgurClientSecretId = configuration.GetValue<string>("Imgur:ClientSecretKey");

            var imgurClient = new ApiClient(imgurClientId, imgurClientSecretId);
            var imgurEndpoint = new ImageEndpoint(imgurClient, new HttpClient());

            services.AddSingleton<IApiClient>(imgurClient);
            services.AddSingleton<IImageEndpoint>(imgurEndpoint);


            return services;
        }
    }
}
