using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertsController : ControllerBase
    {
        private readonly IAdvertService _advertService;
        private readonly IUserService _userService;
        private readonly ILogger<AdvertsController> _logger;
        public AdvertsController(IAdvertService advertService, IUserService userService, ILogger<AdvertsController> logger)
        {
            _advertService = advertService;
            _userService = userService;
            _logger = logger;
        }

        [HttpPost("add")]
        public async Task<ActionResult<int>> Add(Advert advert)
        {
            if (advert == null) return BadRequest();
            try
            {
                var isUserExist = await _userService.IsUserExist(advert.AppUserId).ConfigureAwait(false);
                if (!isUserExist) return BadRequest();

                var result = await _advertService.AddAsync(advert).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(Add), e);
                return BadRequest();
            }
        }
        [HttpGet("getAdvert")]
        public async Task<ActionResult<Advert>> GetAdvert(int id)
        {
            if (id == 0) return BadRequest();
            try
            {
                var result = await _advertService.GetAsync(id).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(GetAdvert), e);
                return BadRequest();
            }
        }
        [HttpGet("getAnyAdverts")]
        public async Task<ActionResult<IEnumerable<Advert>>> GetAnyAdverts(int pageNumber)
        {
            try
            {
                var result = await _advertService.GetAnyAdvertsAsync(pageNumber).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(GetAnyAdverts), e);
                return BadRequest();
            }
        }
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Advert>>> Search(int pageNumber, string locality)
        {
            try
            {
                var result = await _advertService
                    .SearchByLocalityAsync(pageNumber, locality)
                    .ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(Search), e);
                return BadRequest();
            }
        }
        [Authorize]
        [HttpGet("userAdverts")]
        public async Task<ActionResult<IEnumerable<Advert>>> UserAdverts()
        {
            try
            {
                var userAdverts = await _advertService
                    .GetUserAdvertsAsync(User.FindFirst(ClaimTypes.NameIdentifier)?.Value)
                    .ConfigureAwait(false);

                return Ok(userAdverts);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(UserAdverts), e);
                return BadRequest();
            }
        }
        [Authorize]
        [HttpDelete("{advertId}")]
        public async Task<IActionResult> Delete(int advertId)
        {
            try
            {
                await _advertService
                    .RemoveAsync(advertId)
                    .ConfigureAwait(false);
                return NoContent();
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(Delete), e);
                return BadRequest();
            }
        }
    }
}
