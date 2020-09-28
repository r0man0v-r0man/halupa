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

        private MemoryCacheEntryOptions memoryCacheEntryOptions => memoryCacheEntryOptions ?? new MemoryCacheEntryOptions { SlidingExpiration = TimeSpan.FromDays(1) };

        public SitemapService(IMemoryCache memoryCache, IAdvertService advertService)
        {
            _memoryCache = memoryCache;
            _advertService = advertService;
        }

        public async Task<XDocument> GetSitemapAsync()
        {
            throw new NotImplementedException();
        }
    }
}
