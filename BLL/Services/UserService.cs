using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepo _userRepo;
        public UserService(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }
        public Task<IdentityResult> CreateAsync(AppUserDto user, string password)
        {
            throw new NotImplementedException();
        }

        public Task<string> LoginAsync(AppUserDto user, string password)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> IsValidateUserNameAsync(string userName)
        {
            var result = await _userRepo.IsValidateUserNameAsync(userName)
                .ConfigureAwait(false);
            return result;
        }

        public Task<AppUserDto> GetUserInfo(string currentUserId)
        {
            throw new NotImplementedException();
        }
    }
}
