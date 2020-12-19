using AutoMapper;
using BLL.DTO;
using DAL.Entities;

namespace BLL.Config
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<User, AppUser>()
                // If Id on UserDto is null, then I use default value from UserIdentity 
                // - which is automatically generated Guid.
                // https://github.com/dotnet/aspnetcore/issues/16866 
                .ForMember(dest => dest.Id, opt => opt.Condition(src => src.Id != null))
                .ReverseMap();
                
        }
    }
}
