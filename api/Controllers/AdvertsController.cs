using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> Add(AdvertDto advert)
        {
            var result = await _advertService.AddAsync(advert).ConfigureAwait(false);
            return Ok();
        }
    }
}
