using DAL.Context.Interfaces;
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
            throw new NotImplementedException();
        }
    }
}
