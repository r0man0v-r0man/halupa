using DAL.Entities;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repo
{
    public class UserRepo : IUserRepo
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration _configuration;

        public UserRepo(IConfiguration configuration, UserManager<AppUser> userManager)
        {
            _configuration = configuration;
            _userManager = userManager;
        }

        public async Task<bool> CheckPasswordAsync(AppUser user, string password) => 
            await _userManager
            .CheckPasswordAsync(user, password)
            .ConfigureAwait(false);

        public async Task<IdentityResult> CreateAsync(AppUser user, string password)
        {
            var result = await _userManager.CreateAsync(user, password).ConfigureAwait(false);
            if (result.Succeeded)
            {
                await _userManager.AddClaimsAsync(user, new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.UniqueName, user?.UserName),
                    new Claim(JwtRegisteredClaimNames.Sub, user?.Id)
                }).ConfigureAwait(false);
            }
            return result;
        }

        public string CreateToken(IEnumerable<Claim> claims)
        {
            var secretsBytes = Encoding.UTF8.GetBytes(_configuration["TokenSecret"]);
            var key = new SymmetricSecurityKey(secretsBytes);
            var algorithm = SecurityAlgorithms.HmacSha256;

            var signingCredentials = new SigningCredentials(key, algorithm);

            var token = new JwtSecurityToken(
                _configuration["TokenIssuer"],
                _configuration["TokenAudience"],
                claims,
                notBefore: DateTime.Now,
                expires: DateTime.Now.AddDays(7),
                signingCredentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<AppUser> FindByIdAsync(string currentUserId) => 
            await _userManager.Users
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == currentUserId)
            .ConfigureAwait(false);

        public async Task<AppUser> FindByNameAsync(string userName) => 
            await _userManager
            .FindByNameAsync(userName)
            .ConfigureAwait(false);

        public async Task<IEnumerable<Claim>> GetClaims(AppUser user) => 
            await _userManager
            .GetClaimsAsync(user)
            .ConfigureAwait(false);

        public async Task<bool> IsValidateUserNameAsync(string userName)
        {
            var result = await FindByNameAsync(userName).ConfigureAwait(false);
            return result != null;
        }
    }
}
