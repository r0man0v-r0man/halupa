using System;
using System.Collections.Generic;
using System.Text;
using DAL.Entities;

namespace BLL.DTO
{
    public class AreaDto
    {
        public int Value { get; set; }

        public static implicit operator Area(AreaDto areaDto) => new Area
        {
            Value = areaDto.Value
        };

        public static implicit operator AreaDto(Area area) => area != null
                ? new AreaDto
                {
                    Value = area.Value
                }
                : new AreaDto();
    }
}
