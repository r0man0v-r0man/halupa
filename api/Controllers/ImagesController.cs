using System;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IFileService _fileService;
        public ImagesController(IFileService fileService)
        {
            _fileService = fileService;
        }
        [HttpPost]
        public async Task<ActionResult<ImageDto>> Post(IFormFile image)
        {
            if (image is null) return StatusCode(StatusCodes.Status503ServiceUnavailable);
            try
            {
                var result = await _fileService.UploadAsync(image).ConfigureAwait(false);
                return CreatedAtAction(nameof(Post), result);
            }
            catch (Exception)
            {
                return BadRequest();
                throw;
            }
        }
    }
}
