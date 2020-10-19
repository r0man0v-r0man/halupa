using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Http;
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
    }
}
