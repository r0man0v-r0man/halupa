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
        public async Task<IdentityResult> CreateAsync(UserDto user, string password)
        {
            var result = await _userRepo.CreateAsync(user, password).ConfigureAwait(false);
            return result;
        }

        public async Task<string> LoginAsync(UserDto user, string password)
        {
            //find user
            var existUser = await _userRepo.FindByNameAsync(user?.UserName).ConfigureAwait(false);
            //check pair user - password
            var checkUserPassword = await _userRepo.CheckPasswordAsync(existUser, password).ConfigureAwait(false);
            if (existUser != null && checkUserPassword == true)
            {
                //generates user claims
                var claims = await _userRepo.GetClaims(existUser).ConfigureAwait(false);
                //create JWT
                return _userRepo.CreateToken(claims);
            }
            return null;
        }

        public async Task<bool> IsValidateUserNameAsync(string userName) =>
            await _userRepo.IsValidateUserNameAsync(userName)
                .ConfigureAwait(false);


        public Task<UserDto> GetUserInfo(string currentUserId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> IsUserExist(string userId)
        {
            if (string.IsNullOrEmpty(userId)) return false;
            
            var user = await _userRepo.FindByIdAsync(userId).ConfigureAwait(false);
            return user != null;
        }
    }
}
