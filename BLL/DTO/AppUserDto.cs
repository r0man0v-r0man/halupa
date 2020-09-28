using System.Globalization;
using DAL.Entities;

namespace BLL.DTO
{
    public class AppUserDto
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string NormalizedUserName { get; set; }

        public static implicit operator AppUserDto(AppUser appUser) => new AppUserDto
        {
            UserName = appUser?.UserName,
            Id = appUser?.Id
        };

        public static implicit operator AppUser(AppUserDto appUserDto) => new AppUser
        {
            UserName = appUserDto?.UserName,
            NormalizedUserName = appUserDto?.UserName.ToUpper(CultureInfo.GetCultureInfo(1049))
        };
    }
}
