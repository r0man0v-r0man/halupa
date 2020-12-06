using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services.Interfaces
{
    public interface IAdvertService
    {
        Task<int> AddAsync(AdvertDto advert);
        Task<AdvertDto> GetAsync(int id);
        Task<IEnumerable<AdvertDto>> GetAnyAdvertsAsync(int pageNumber);
    }
}
