using DAL.Context;
using DAL.Context.Interfaces;
using DAL.Entities;
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

        public async Task<bool> DeleteAdvertAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Advert> GetAdvertByIdAsync(int id)
        {
            using var context = _contextFactory.CreateDbContext();
            var result = await context.Adverts
                .Include(prop => prop.Address.GeoObject.Point)
                .Include(prop => prop.Address.GeoObject.BoundedBy.Envelope)
                .Include(prop => prop.Address.GeoObject.MetaDataProperty.GeocoderMetaData.Address.Components)
                .Include(prop => prop.Images)
                .Include(prop => prop.Prices)
                .Include(prop => prop.Contacts)
                .Include(prop => prop.Description)
                .Include(prop => prop.Areas)
                .AsNoTracking()
                .FirstOrDefaultAsync(prop => prop.Id == id)
                .ConfigureAwait(false);
            return result ?? throw new Exception($"Not Found Advert with id: {id}");
        }

        public async Task<IEnumerable<Advert>> GetAdvertsAsync(int pageNumber)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Advert>> GetUserAdvertsAsync(string userId, int pageNumber)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Advert>> GetAnyAdvertsAsync(int pageNumber)
        {
            using var context = _contextFactory.CreateDbContext();
            return await context.Adverts
                .Include(prop => prop.Images)
                .Include(prop => prop.Prices)
                .Include(prop => prop.Description)
                .Include(prop => prop.Areas)
                .Include(prop => prop.Contacts)
                .Include(prop => prop.Address.GeoObject.MetaDataProperty.GeocoderMetaData.Address.Components)
                .AsNoTracking()
                .Where(prop => prop.IsActive)
                .OrderByDescending(prop => prop.Created)
                .Skip(SkipCalc(pageNumber))
                .Take(SIZE)
                .ToListAsync()
                .ConfigureAwait(false);
        }
        private int SkipCalc(int pageNumber) => (SIZE * pageNumber) - SIZE;
    }
}
