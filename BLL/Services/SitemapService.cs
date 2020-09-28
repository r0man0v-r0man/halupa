using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using BLL.Services.Interfaces;
using Microsoft.Extensions.Caching.Memory;

namespace BLL.Services
{
    public class SitemapService : ISitemapService
    {
        private readonly IAdvertService _advertService;
        private readonly IMemoryCache _memoryCache;

        private MemoryCacheEntryOptions MemoryCacheEntryOptions { get; }

        public SitemapService(IMemoryCache memoryCache, IAdvertService advertService)
        {
            _memoryCache = memoryCache;
            _advertService = advertService;
            MemoryCacheEntryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1)
            };
        }

        public async Task<XDocument> GetSitemapAsync()
        {
            throw new NotImplementedException();
        }
    }
}
