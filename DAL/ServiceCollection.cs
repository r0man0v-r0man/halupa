using DAL.Context;
using DAL.Entities;
using DAL.Repo;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DAL
{
    public static class ServiceCollection
    {
        public static IServiceCollection AddDalServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContextFactory<HalupaContext>(options =>
            {
                var connection = new SqliteConnection(configuration.GetConnectionString("HalupaConnection"));
                // linq to sql сравнение без учета регистра
                // https://github.com/dotnet/efcore/issues/11414#issuecomment-376272297
                // https://docs.microsoft.com/en-us/ef/core/miscellaneous/collations-and-case-sensitivity#column-collation
                connection.CreateCollation("NOCASE", (x, y) => string.Compare(x, y, ignoreCase: true));

                options.UseSqlite(connection);
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

            return services;
        }
    }
}
