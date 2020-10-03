using DAL.Context.Interfaces;
using DAL.Entities;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repo
{
    public class AdvertRepo : IAdvertRepo
    {
        private readonly IContextFactory _contextFactory;
        private readonly UserManager<AppUser> _userManager;

        const byte SIZE = 20;
        public AdvertRepo(IContextFactory contextFactory, UserManager<AppUser> userManager)
        {
            _contextFactory = contextFactory;
            _userManager = userManager;
        }
        public async Task<int> AddAdvertAsync(Advert advert)
        {
            try
            {
                using var context = _contextFactory.GetHalupaContext();
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
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Advert>> GetAdvertsAsync(int pageNumber)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Advert>> GetUserAdvertsAsync(string userId, int pageNumber)
        {
            throw new NotImplementedException();
        }
    }
}
