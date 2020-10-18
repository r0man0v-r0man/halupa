using DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repo.Interfaces
{
    public interface IAdvertRepo
    {
        Task<int> AddAdvertAsync(Advert advert);
        Task<Advert> GetAdvertByIdAsync(int id);
        Task<IEnumerable<Advert>> GetAdvertsAsync(int pageNumber);
        Task<IEnumerable<Advert>> GetUserAdvertsAsync(string userId, int pageNumber);
        Task<bool> DeleteAdvertAsync(int id);
        Task<IEnumerable<Advert>> GetAnyAdverts(int pageNumber);
    }
}
