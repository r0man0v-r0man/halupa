﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BL = BLL.DTO;
using DA = DAL.Entities;
using BLL.Services.Interfaces;
using DAL.Repo.Interfaces;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using BLL.Helpers;

namespace BLL.Services
{
    public class AdvertService : IAdvertService
    {
        private readonly IAdvertRepo _advertRepo;

        private readonly IMemoryCache _memoryCache;
        private readonly MemoryCacheEntryOptions _memoryCacheEntryOptions;

        private readonly IMapper _mapper;

        private const string advertKey = "advert";
        public AdvertService(
            IAdvertRepo advertRepo,
            IMemoryCache memoryCache,
            CacheHelper cacheHelper,
            IMapper mapper)
        {
            _advertRepo = advertRepo;
            _memoryCache = memoryCache;
            _mapper = mapper;
            _memoryCacheEntryOptions = cacheHelper.MemoryCacheEntryOptions;
        }

        public async Task<int> AddAsync(BL.Advert advert) =>
             await _advertRepo
                .AddAdvertAsync(_mapper.Map<DA.Advert>(advert))
                .ConfigureAwait(false);
        

        public async Task<BL.Advert> GetAsync(int id)
        {
            return await _memoryCache.GetOrCreateAsync(advertKey + id, async cacheEntry =>
            {
                cacheEntry
                .AbsoluteExpirationRelativeToNow = _memoryCacheEntryOptions.AbsoluteExpirationRelativeToNow;
                var result = await _advertRepo
                    .GetAdvertByIdAsync(id)
                    .ConfigureAwait(false);
                return _mapper.Map<BL.Advert>(result);
            }).ConfigureAwait(false);
        }

        public async Task<IEnumerable<BL.Advert>> GetAnyAdvertsAsync(int pageNumber)
        {
            var adverts = await _advertRepo
                .GetAnyAdvertsAsync(pageNumber)
                .ConfigureAwait(false);
            return _mapper.Map<IEnumerable<BL.Advert>>(adverts);
        }

        public async Task<IEnumerable<BL.Advert>> SearchByLocalityAsync(int pageNumber, string locality)
        {
            var result = await _advertRepo
                .SearchByLocalityAsync(pageNumber, locality)
                .ConfigureAwait(false);
            return _mapper.Map<IEnumerable<BL.Advert>>(result);
        }

        public async Task<IEnumerable<int>> GetAdvertsIds() => 
            await _advertRepo
                .GetAdvertsIds()
                .ConfigureAwait(false);
    }
}
