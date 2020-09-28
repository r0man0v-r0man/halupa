using BLL.Services;
using BLL.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace BLL
{
    public static class BLLServices
    {
        public static IServiceCollection AddBllServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IUserService), typeof(UserService));
            services.AddScoped(typeof(IAdvertService), typeof(AdvertService));
            services.AddScoped(typeof(IFileService), typeof(FileService));

            services.AddMemoryCache();

            return services;
        }
    }
}
