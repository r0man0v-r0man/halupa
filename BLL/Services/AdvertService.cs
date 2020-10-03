using System;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using DAL.Repo.Interfaces;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace BLL.Services
{
    public class AdvertService : IAdvertService
    {
        private readonly IAdvertRepo _advertRepo;
        private readonly IMemoryCache _memoryCache;
        private MemoryCacheEntryOptions MemoryCacheEntryOptions { get; }
        public AdvertService(
            IAdvertRepo advertRepo, 
            IMemoryCache memoryCache,
            IConfiguration configuration)
        {
            _advertRepo = advertRepo;
            _memoryCache = memoryCache;
            MemoryCacheEntryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(configuration.GetValue<int>("MemoryCacheEntryOptions:AbsoluteExpirationRelativeToNow"))
            };
        }
        public async Task<int> AddAsync(AdvertDto advert)
        {
            var result = await _advertRepo.AddAdvertAsync(advert).ConfigureAwait(false);
            return result;
        }
    }
}
