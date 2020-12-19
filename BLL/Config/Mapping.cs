using AutoMapper;
using BLL.DTO;
using DAL.Entities;

namespace BLL.Config
{
    public class Mapping : Profile
    {
        public void CreateBlMap()
        {
            CreateMap<User, AppUser>();
        }
    }
}
