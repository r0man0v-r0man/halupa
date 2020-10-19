using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace BLL.DTO
{
    public class UserDto
    {
        /// <summary>
        /// Unique identificator
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// User Name - Login
        /// </summary>
        public string UserName { get; set; }
        public string NormalizedUserName { get; set; }
        public string Password { get; set; }

        /// <summary>
        /// Mapping to AppUserDTO
        /// </summary>
        /// <param name="identityUser"></param>
        public static implicit operator UserDto(AppUser appUser) => new UserDto
        {
            UserName = appUser?.UserName,
            Id = appUser.Id
        };
        /// <summary>
        /// Mapping to AppUser
        /// </summary>
        /// <param name="userViewModel"></param>
        public static implicit operator AppUser(UserDto appUserDTO) => new AppUser
        {
            UserName = appUserDTO?.UserName,
            NormalizedUserName = appUserDTO.UserName.ToUpper(CultureInfo.GetCultureInfo(1049))
        };
    }
}
