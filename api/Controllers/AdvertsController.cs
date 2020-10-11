using System;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertsController : ControllerBase
    {
        private readonly IAdvertService _advertService;
        public AdvertsController(IAdvertService advertService)
        {
            _advertService = advertService;
        }

        [HttpPost("add")]
        public async Task<ActionResult<int>> Add(AdvertDto advert)
        {
            if (advert == null) return BadRequest();
            try
            {
                var result = await _advertService.AddAsync(advert).ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception)
            {
                return BadRequest();
                throw;
            }
        }
    }
}
