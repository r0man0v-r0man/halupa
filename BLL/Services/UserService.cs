using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using BLL.Services.Interfaces;
using DAL.Entities;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;
        public UserService(IUserRepo userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }
        public async Task<IdentityResult> CreateAsync(User user, string password) => 
            await _userRepo
                .CreateAsync(_mapper.Map<AppUser>(user), password)
                .ConfigureAwait(false);
           

        public async Task<string> LoginAsync(User user, string password)
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


        public Task<User> GetUserInfo(string currentUserId)
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
