using System;
using System.Linq;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IUserService _userService;
        public AccountsController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet("isUserNameExist/{userName}")]
        public async Task<ActionResult<bool>> IsUserNameExist(string userName)
        {
            try
            {
                var result = await _userService.IsValidateUserNameAsync(userName).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception e)
            {
                // log e
                return BadRequest(e.Message);
                throw;
            }
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserDto user)
        {
            if (user == null) return BadRequest();
            try
            {
                var result = await _userService.CreateAsync(user, user?.Password).ConfigureAwait(false);

                if (result.Succeeded) return Ok(true);

                return BadRequest(result.Errors.FirstOrDefault().Description);
            }
            catch (Exception)
            {
                return BadRequest();
                throw;
            }
            
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserDto user)
        {
            try
            {
                var loginUser = await _userService.LoginAsync(user, user?.Password).ConfigureAwait(false);
                return CreatedAtAction(nameof(Login), new { access_token = loginUser });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                throw;
            }
        }
    }
}
