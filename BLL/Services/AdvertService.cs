using System;
using System.Collections.Generic;
using System.Linq;
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
        private const string advertKey = "advert";
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

        public async Task<AdvertDto> GetAsync(int id)
        {
            return await _memoryCache.GetOrCreateAsync(advertKey + id, async cacheEntry =>
            {
                cacheEntry.AbsoluteExpirationRelativeToNow = MemoryCacheEntryOptions.AbsoluteExpirationRelativeToNow;
                AdvertDto advert = await _advertRepo.GetAdvertByIdAsync(id).ConfigureAwait(false);
                return advert;
            }).ConfigureAwait(false);
        }

        public async Task<IEnumerable<AdvertDto>> GetAnyAdvertsAsync(int pageNumber)
        {
            var adverts = await _advertRepo.GetAnyAdvertsAsync(pageNumber).ConfigureAwait(false);
            return adverts.Select(advert => (AdvertDto)advert);
        }
    }
}
