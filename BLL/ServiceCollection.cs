using AutoMapper;
using BLL.Config;
using BLL.Helpers;
using BLL.Services;
using BLL.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace BLL
{
    public static class ServiceCollection
    {
        public static IServiceCollection AddBllServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IUserService), typeof(UserService));
            services.AddScoped(typeof(IAdvertService), typeof(AdvertService));
            services.AddScoped(typeof(IFileService), typeof(FileService));
            services.AddScoped(typeof(ISitemapService), typeof(SitemapService));

            services.AddMemoryCache();
            services.AddSingleton<CacheHelper>();

            services.AddAutoMapper(typeof(BLLMappingProfile));
            

            return services;
        }
    }
}
