using System.Globalization;
using Adv.DAL.Entities;

namespace BLL.DTO
{
    public class AppUserDto
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string NormalizedUserName { get; set; }

        public static AppUserDto ToAppUserDto(AppUser appUser) => new AppUserDto
        {
            UserName = appUser?.UserName,
            Id = appUser?.Id
        };

        public static AppUser ToAppUserDal(AppUserDto appUserDto) => new AppUser
        {
            UserName = appUserDto?.UserName,
            NormalizedUserName = appUserDto?.UserName.ToUpper(CultureInfo.GetCultureInfo(1049))
        };
    }
}
