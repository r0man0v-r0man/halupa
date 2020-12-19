using System.Collections.Generic;
using System.Linq;
using BLL.DTO.Address;
using DAL.Entities;
using DAL.Entities.Common;

namespace BLL.DTO
{
    public class AdvertDto : AuditableEntity
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public bool IsActive { get; set; }
        public YandexAddressDto Address { get; set; }
        public List<ImageDto> Images { get; set; }
        public List<Price> Prices { get; set; }
        public DescriptionDto Description { get; set; }
        public List<AreaDto> Areas { get; set; }
        public List<ContactDto> Contacts { get; set; }

        public static implicit operator Advert(AdvertDto advertDto) => new Advert
        {
            Id = advertDto.Id,
            AppUserId = advertDto?.AppUserId,
            IsActive = advertDto.IsActive,
            Address = advertDto.Address,
            Images = advertDto.Images.Select(item => (Image) item).ToList(),
            Prices = advertDto.Prices.Select(item => (DAL.Entities.Price) item).ToList(),
            Description = advertDto.Description,
            Areas = advertDto.Areas.Select(item => (Area)item).ToList(),
            Contacts = advertDto.Contacts.Select(item => (Contact)item).ToList()
        };

        public static implicit operator AdvertDto(Advert advert) => new AdvertDto
        {
            Created = advert.Created,
            LastModified = advert.LastModified,
            Id = advert.Id,
            IsActive = advert.IsActive,
            Address = advert.Address,
            Images = advert.Images.Select(item => (ImageDto) item).ToList(),
            Prices = advert?.Prices.Select(item => (Price)item).ToList(),
            AppUserId = advert?.AppUserId,
            Areas = advert?.Areas.Select(item => (AreaDto)item).ToList(),
            Contacts = advert?.Contacts.Select(item => (ContactDto)item).ToList(),
            Description = advert?.Description
        };
    }
}
