using DAL.Entities;
using DAL.Repo.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repo
{
    public class AdvertRepo : IAdvertRepo
    {
        public async Task<int> AddAdvertAsync(Advert advert)
        {
            throw new NotImplementedException();
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
