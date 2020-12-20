using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System;

namespace BLL.Helpers
{
    public class CacheHelper
    {
        public MemoryCacheEntryOptions MemoryCacheEntryOptions { get; set; }
        public CacheHelper(IConfiguration configuration)
        {
            MemoryCacheEntryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan
                    .FromHours(configuration
                        .GetValue<int>("MemoryCacheEntryOptions:AbsoluteExpirationRelativeToNow"))
            };
        }
    }
}
