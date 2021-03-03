using System;
using System.Linq;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<AccountsController> _logger;
        public AccountsController(IUserService userService, ILogger<AccountsController> logger)
        {
            _userService = userService;
            _logger = logger;
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
                _logger.LogError(nameof(IsUserNameExist), e);
                return BadRequest(e.Message);
            }
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (user == null) return BadRequest();
            try
            {
                var result = await _userService.CreateAsync(user, user?.Password).ConfigureAwait(false);

                if (result.Succeeded) return Ok(true);

                return BadRequest(result.Errors.FirstOrDefault().Description);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(Register), e);
                return BadRequest(e);
            }
            
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(User user)
        {
            try
            {
                var loginUser = await _userService.LoginAsync(user, user?.Password).ConfigureAwait(false);
                return CreatedAtAction(nameof(Login), new { access_token = loginUser });
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(Login), e);
                return BadRequest();
            }
        }
    }
}
