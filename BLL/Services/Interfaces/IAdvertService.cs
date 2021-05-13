using BL = BLL.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BLL.Services.Interfaces
{
    public interface IAdvertService
    {
        /// <summary>
        /// Добавить объявление
        /// </summary>
        /// <param name="advert">BL модель объявления</param>
        /// <returns>Id созданного объявления</returns>
        Task<BL.Advert> AddAsync(BL.Advert advert);
        /// <summary>
        /// Найти объявление по Id
        /// </summary>
        /// <param name="id">Идентификатор объявления</param>
        /// <returns>BL модель объявления</returns>
        Task<BL.Advert> GetAsync(int id);
        Task<IEnumerable<BL.Advert>> GetAnyAdvertsAsync(int pageNumber);
        Task<IEnumerable<BL.Advert>> SearchByLocalityAsync(int pageNumber, string locality);
        /// <summary>
        /// Коллекция идентификаторов всех объявлений
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<int>> GetAdvertsIds();
        Task<IEnumerable<BL.Advert>> GetUserAdvertsAsync(string userId);
        Task RemoveAsync(int advertId);
    }
}
