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
        public PriceDto Price { get; set; }
        public DescriptionDto Description { get; set; }
        public AreaDto Area { get; set; }
        public ContactDto Contact { get; set; }

        public static implicit operator Advert(AdvertDto advertDto) => new Advert
        {
            Id = advertDto.Id,
            AppUserId = advertDto.AppUserId,
            IsActive = advertDto.IsActive,
            Address = advertDto.Address,
            Images = advertDto.Images.Select(item => (Image) item).ToList(),
            Price = advertDto.Price,
            Description = advertDto.Description,
            Area = advertDto.Area,
            Contact = advertDto.Contact
        };

        public static implicit operator AdvertDto(Advert advert) => new AdvertDto
        {
            Created = advert.Created,
            LastModified = advert.LastModified,
            Id = advert.Id,
            IsActive = advert.IsActive,
            Address = advert.Address,
            Images = advert.Images.Select(item => (ImageDto) item).ToList(),
            Price = advert.Price,
            AppUserId = advert.AppUserId,
            Area = advert.Area,
            Contact = advert.Contact,
            Description = advert.Description
        };
    }
}
