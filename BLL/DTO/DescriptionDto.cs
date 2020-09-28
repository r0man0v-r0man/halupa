using System;
using System.Collections.Generic;
using System.Text;
using DAL.Entities;

namespace BLL.DTO
{
    public class DescriptionDto
    {
        public string Value { get; set; }

        public static implicit operator Description(DescriptionDto descriptionDto) => new Description
        {
            Value = descriptionDto?.Value
        };

        public static implicit operator DescriptionDto(Description description) => new DescriptionDto
        {
            Value = description?.Value
        };
    }
}
