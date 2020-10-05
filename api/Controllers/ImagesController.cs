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
        public async Task<ActionResult<ImageDto>> Post(IFormFile file)
        {
            if (file is null) return StatusCode(StatusCodes.Status503ServiceUnavailable);
            try
            {
                var result = await _fileService.UploadAsync(file).ConfigureAwait(false);
                return CreatedAtAction(nameof(Post), result);
            }
            catch (Exception)
            {
                return BadRequest();
                throw;
            }
        }
        [HttpDelete("{deleteHash}")]
        public async Task<IActionResult> Delete(string deleteHash)
        {
            if (string.IsNullOrEmpty(deleteHash)) return StatusCode(StatusCodes.Status503ServiceUnavailable);
            
            var result = await _fileService
                .DeleteAsync(deleteHash).ConfigureAwait(false);

            return result ? Ok(result) : (IActionResult)BadRequest(result);

        }
    }
}
