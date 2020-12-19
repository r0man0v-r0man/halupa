﻿using System;
using System.Threading.Tasks;
using System.Xml.Linq;
using BLL.Services.Interfaces;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace BLL.Services
{
    public class SitemapService : ISitemapService
    {
        private readonly IAdvertService _advertService;
        private readonly IMemoryCache _memoryCache;

        private MemoryCacheEntryOptions MemoryCacheEntryOptions { get; }

        public SitemapService(IMemoryCache memoryCache, IAdvertService advertService, IConfiguration configuration)
        {
            _memoryCache = memoryCache;
            _advertService = advertService;
            MemoryCacheEntryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(configuration.GetValue<int>("MemoryCacheEntryOptions:AbsoluteExpirationRelativeToNow"))
            };
        }

        public async Task<XDocument> GetSitemapAsync()
        {
            return await _memoryCache.GetOrCreateAsync("sitemap", async cacheEntry =>
            {
                cacheEntry.AbsoluteExpirationRelativeToNow = MemoryCacheEntryOptions.AbsoluteExpirationRelativeToNow;
                
                XNamespace xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9";
                XElement root = new XElement(xmlns + "urlset");
                
                var ids = await _advertService.GetAdvertsIds().ConfigureAwait(false);
                
                root.Add(new XElement(xmlns + "url", new XElement(xmlns + "loc", "https://halupa.by")));
                root.Add(new XElement(xmlns + "url", new XElement(xmlns + "loc", "https://halupa.by/adverts")));

                foreach (var id in ids)
                {
                    XElement urlElement = new XElement(
                        xmlns + "url",
                        new XElement(xmlns + "loc", $"https://halupa.by/adverts/{id}"));
                    root.Add(urlElement);
                }
                
                return new XDocument(root);
            }).ConfigureAwait(false);
        }
    }
}
