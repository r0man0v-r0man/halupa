using System;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly ILogger<ImagesController> _logger;
        public ImagesController(IFileService fileService, IWebHostEnvironment webHostEnvironment, ILogger<ImagesController> logger)
        {
            _fileService = fileService;
            _webHostEnvironment = webHostEnvironment;
            _logger = logger;
        }
        [HttpPost]
        public async Task<ActionResult<Image>> Post(IFormFile file)
        {
            
            if (file is null) return StatusCode(StatusCodes.Status503ServiceUnavailable);
            try
            {
                var result = await _fileService
                    .UploadAsync(file)
                    .ConfigureAwait(false);
                return CreatedAtAction(nameof(Post), result);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(Post), e);
                return BadRequest();
            }
        }
        [HttpDelete("{deleteHash}")]
        public async Task<IActionResult> Delete(string deleteHash)
        {
            if (string.IsNullOrEmpty(deleteHash)) return StatusCode(StatusCodes.Status503ServiceUnavailable);
            try
            {
                var result = await _fileService
                       .DeleteAsync(deleteHash) //переделать
                       .ConfigureAwait(false);
                return Ok(result);
            }
            catch (Exception e)
            {
                _logger.LogError(nameof(Delete), e);
                return BadRequest();
            }
        }

    }
}
