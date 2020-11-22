using System;
using System.Collections.Generic;
using System.Text;
using DAL.Entities;
using DAL.Entities.Enums;

namespace BLL.DTO
{
    public class AreaDto
    {
        public AreaType Kind { get; set; }
        public int Value { get; set; }

        public static implicit operator Area(AreaDto areaDto) => new Area
        {
            Value = areaDto.Value,
            Kind = areaDto.Kind
        };

        public static implicit operator AreaDto(Area area) => area != null
        ? new AreaDto
        {
            Value = area.Value,
            Kind = area.Kind
        }
        : new AreaDto();
    }
}
