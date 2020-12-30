using DAL.Context;
using DAL.Context.Interfaces;
using DAL.Entities;
using DAL.Extensions;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Repo
{
    public class AdvertRepo : IAdvertRepo
    {
        private readonly IDbContextFactory<HalupaContext> _contextFactory;
        private readonly UserManager<AppUser> _userManager;

        const byte SIZE = 20;
        public AdvertRepo(IDbContextFactory<HalupaContext> contextFactory, UserManager<AppUser> userManager)
        {
            _contextFactory = contextFactory;
            _userManager = userManager;
        }
        public async Task<int> AddAdvertAsync(Advert advert)
        {
            try
            {
                using var context = _contextFactory.CreateDbContext();
                await context.Adverts.AddAsync(advert).ConfigureAwait(false);
                var result = await context.SaveChangesAsync().ConfigureAwait(false);
                return result > 0 ? advert.Id : throw new Exception("Error save advert");
            }
            catch (Exception)
            {
                throw;
            }

        }

        public async Task DeleteAdvertAsync(int id)
        {
            try
            {
                using var context = _contextFactory.CreateDbContext();
                var advert = await context.Adverts.FirstOrDefaultAsync(x => x.Id == id).ConfigureAwait(false);
                context.Adverts.Remove(advert);
                await context.SaveChangesAsync().ConfigureAwait(false);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Advert> GetAdvertByIdAsync(int id)
        {
            using var context = _contextFactory.CreateDbContext();
            var result = await context.Adverts
                .IncludeAdvertFields()
                .AsNoTracking()
                .FirstOrDefaultAsync(prop => prop.Id == id)
                .ConfigureAwait(false);
            return result ?? throw new Exception($"Not Found Advert with id: {id}");
        }

        public async Task<IEnumerable<int>> GetAdvertsIds()
        {
            using var context = _contextFactory.CreateDbContext();
            return await context.Adverts
                .AsNoTracking()
                .Where(prop => prop.IsActive)
                .Select(prop => prop.Id)
                .ToArrayAsync()
                .ConfigureAwait(false);
        }

        public async Task<IEnumerable<Advert>> GetAdvertsAsync(int pageNumber)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Advert>> GetUserAdvertsAsync(string userId)
        {
            try
            {
                using var context = _contextFactory.CreateDbContext();
                return await context.Adverts
                    .AsNoTracking()
                    .IncludeAdvertFields()
                    .Where(prop => string.Equals(prop.AppUserId, userId))
                    .ToListAsync()
                    .ConfigureAwait(false);
            }
            catch 
            {
                throw;
            }
        }

        public async Task<IEnumerable<Advert>> GetAnyAdvertsAsync(int pageNumber)
        {
            using var context = _contextFactory.CreateDbContext();
            return await context.Adverts
                .IncludeAdvertFields()
                .AsNoTracking()
                .Where(prop => prop.IsActive)
                .OrderByDescending(prop => prop.Created)
                .Skip(SkipCalc(pageNumber))
                .Take(SIZE)
                .ToListAsync()
                .ConfigureAwait(false);
        }
        private int SkipCalc(int pageNumber) => (SIZE * pageNumber) - SIZE;

        public async Task<IEnumerable<Advert>> SearchByLocalityAsync(int pageNumber, string locality)
        {
            using var context = _contextFactory.CreateDbContext();
            
            return await context.Adverts
                .IncludeAdvertFields()
                .AsNoTracking()
                .Where(prop => prop.Address.GeoObject.MetaDataProperty.GeocoderMetaData.Address.Components
                    // linq to sql сравнение без учета регистра
                    // https://github.com/dotnet/efcore/issues/11414#issuecomment-376272297
                    // https://docs.microsoft.com/en-us/ef/core/miscellaneous/collations-and-case-sensitivity#column-collation
                    .Any(c => string.Equals(c.Kind, "locality") && EF.Functions.Collate(c.Name, "NOCASE") == locality)) // todo добавить enum kind
                .OrderByDescending(prop => prop.Created)
                .Skip(SkipCalc(pageNumber))
                .Take(SIZE)
                .ToListAsync()
                .ConfigureAwait(false);
        }
    }
}
