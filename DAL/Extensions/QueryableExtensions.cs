using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Extensions
{
    public static class QueryableExtensions
    {
        /// <summary>
        /// Include всех полей для объявлений
        /// </summary>
        /// <param name="adverts"></param>
        /// <returns></returns>
        public static IQueryable<Advert> IncludeAdvertFields(this IQueryable<Advert> adverts)
        {
            return adverts
                .AsSplitQuery()
                .Include(prop => prop.YandexAddress.GeoObject.Point)
                .Include(prop => prop.YandexAddress.GeoObject.BoundedBy.Envelope)
                .Include(prop => prop.YandexAddress.GeoObject.MetaDataProperty.GeocoderMetaData.Address.Components)
                .Include(prop => prop.Description)
                .Include(prop => prop.Areas)
                .Include(prop => prop.Contacts)
                .Include(prop => prop.Images)
                .Include(prop => prop.Prices);
        }
    }
}
