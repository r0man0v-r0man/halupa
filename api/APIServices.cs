using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api
{
    public static class APIServices
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services)
        {
            services.AddCors();
            return services;
        }
    }
}
