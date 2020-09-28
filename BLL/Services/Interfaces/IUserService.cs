using System.Threading.Tasks;
using BLL.DTO;
using Microsoft.AspNetCore.Identity;

namespace BLL.Services.Interfaces
{
    public interface IUserService
    {
        /// <summary>
        /// Create User
        /// </summary>
        /// <param name="user">AppUserDTO model</param>
        /// <param name="password">Password</param>
        /// <returns></returns>
        Task<IdentityResult> CreateAsync(AppUserDto user, string password);
        /// <summary>
        /// Login user
        /// </summary>
        /// <param name="user"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        Task<string> LoginAsync(AppUserDto user, string password);
        Task<bool> IsValidateUserNameAsync(string userName);
        /// <summary>
        /// Get user info
        /// </summary>
        /// <param name="currentUserId"></param>
        /// <returns></returns>
        Task<AppUserDto> GetUserInfo(string currentUserId);
    }
}
