﻿using DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repo.Interfaces
{
    public interface IAdvertRepo
    {
        Task<Advert> AddAdvertAsync(Advert advert);
        Task<Advert> GetAdvertByIdAsync(int id);
        Task<IEnumerable<int>> GetAdvertsIds();
        Task<IEnumerable<Advert>> GetAdvertsAsync(int pageNumber);
        Task<IEnumerable<Advert>> GetUserAdvertsAsync(string userId);
        Task DeleteAdvertAsync(int id);
        Task<IEnumerable<Advert>> GetAnyAdvertsAsync(int pageNumber);
        Task<IEnumerable<Advert>> SearchByLocalityAsync(int pageNumber, string locality);
    }
}
