using AutoMapper;
using BL = BLL.DTO;
using DA = DAL.Entities;

namespace BLL.Config
{
    public class BLLMappingProfile : Profile
    {
        public BLLMappingProfile()
        {
            CreateMap<BL.User, DA.AppUser>()
                // If Id on UserDto is null, then I use default value from UserIdentity 
                // - which is automatically generated Guid.
                // https://github.com/dotnet/aspnetcore/issues/16866 
                .ForMember(appUser => appUser.Id, optional => optional.Condition(user => user.Id != null))
                .ReverseMap();

            CreateMap<BL.Price, DA.Price>()
                .ReverseMap();

            CreateMap<BL.Description, DA.Description>()
                .ReverseMap();

            CreateMap<BL.Contact, DA.Contact>()
                .ReverseMap();

            CreateMap<BL.Image, DA.Image>()
                .ReverseMap();

            CreateMap<BL.Area, DA.Area>()
                .ReverseMap();

            CreateMap<BL.Advert, DA.Advert>()
                .ReverseMap();

            CreateAddressMap();
        }
        /// <summary>
        /// Маппировка сущностей адреса
        /// </summary>
        private void CreateAddressMap()
        {
            CreateMap<BL.Address.YandexAddress, DA.Address.YandexAddress>()
                .ReverseMap();
            CreateMap<BL.Address.Point, DA.Address.Point>()
                .ReverseMap();
            CreateMap<BL.Address.MetaDataProperty, DA.Address.MetaDataProperty>()
                .ReverseMap();
            CreateMap<BL.Address.GeoObject, DA.Address.GeoObject>()
                .ReverseMap();
            CreateMap<BL.Address.GeocoderMetaData, DA.Address.GeocoderMetaData>()
                .ReverseMap();
            CreateMap<BL.Address.Envelope, DA.Address.Envelope>()
                .ReverseMap();
            CreateMap<BL.Address.Component, DA.Address.Component>()
                .ReverseMap();
            CreateMap<BL.Address.BoundedBy, DA.Address.BoundedBy>()
                .ReverseMap();
            CreateMap<BL.Address.Address, DA.Address.Address>()
                .ReverseMap();
        }
    }
}
