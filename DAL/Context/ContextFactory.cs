using DAL.Context.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;

namespace DAL.Context
{
    public class ContextFactory : IContextFactory
    {

        public IConfiguration Configuration { get; set; }

        public ContextFactory(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IHalupaContext GetHalupaContext()
        {
            var optionsBuilder = new DbContextOptionsBuilder<HalupaContext>();
            optionsBuilder.UseNpgsql(Configuration.GetConnectionString("HalupaConnection"));

            return new HalupaContext(optionsBuilder.Options);
        }

        public void Dispose()
        {
        }
    }
}
