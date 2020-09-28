using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace BLL.Services
{
    public class UserService : IUserService

    {
        public Task<IdentityResult> CreateAsync(AppUserDto user, string password)
        {
            throw new NotImplementedException();
        }

        public Task<string> LoginAsync(AppUserDto user, string password)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IsValidateUserNameAsync(string userName)
        {
            throw new NotImplementedException();
        }

        public Task<AppUserDto> GetUserInfo(string currentUserId)
        {
            throw new NotImplementedException();
        }
    }
}
