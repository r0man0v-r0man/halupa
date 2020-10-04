using System;
using System.Collections.Generic;
using System.Text;
using DAL.Entities;

namespace BLL.DTO
{
    public class ImageDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        /// <summary>
        /// уникальная строка для удаления
        /// </summary>
        public string DeleteHash { get; set; }
        /// <summary>
        /// URL картинки
        /// </summary>
        public Links LinkProps { get; set; }
        /// <summary>
        /// уникальный идентификатор, имя
        /// </summary>
        public string Uid { get; set; }
        /// <summary>
        /// размер файла
        /// </summary>
        public long Size { get; set; }

        public static implicit operator Image(ImageDto imageDto) => new Image
        {
            DeleteHash = imageDto?.DeleteHash,
            Id = imageDto.Id,
            Size = imageDto.Size,
            Uid = imageDto?.Uid,
            Url = imageDto?.LinkProps.Download
        };

        public static implicit operator ImageDto(Image image) => new ImageDto
        {
            LinkProps = image?.Url,
            DeleteHash = image?.DeleteHash,
            Id = image.Id,
            Size = image.Size,
            Uid = image?.Uid,
            Name = image?.Uid
        };
        
    }
    public class Links
    {
        public string Download { get; set; }
        public static implicit operator Links(string image) => new Links
        {
            Download = image
        };
    }
}
