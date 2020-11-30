using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertsController : ControllerBase
    {
        private readonly IAdvertService _advertService;
        private readonly IUserService _userService;
        public AdvertsController(IAdvertService advertService, IUserService userService)
        {
            _advertService = advertService;
            _userService = userService;
        }

        [HttpPost("add")]
        public async Task<ActionResult<int>> Add(AdvertDto advert)
        {
            if (advert == null) return BadRequest();
            try
            {
                var isUserExist = await _userService.IsUserExist(advert.AppUserId).ConfigureAwait(false);
                if (!isUserExist) return BadRequest();

                var result = await _advertService.AddAsync(advert).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest();
                throw;
            }
        }
        [HttpGet("getAdvert")]
        public async Task<ActionResult<AdvertDto>> GetAdvert(int id)
        {
            if (id == 0) return BadRequest();
            try
            {
                var result = await _advertService.GetAsync(id).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest();
                throw;
            }
        }
        [HttpGet("getAnyAdverts")]
        public async Task<ActionResult<IEnumerable<AdvertDto>>> GetAnyAdverts(int pageNumber)
        {
            try
            {
                var result = await _advertService.GetAnyAdverts(pageNumber).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
                throw;
            }
        }
    }
}
