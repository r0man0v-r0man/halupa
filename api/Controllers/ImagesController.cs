using System;
using System.IO;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ImagesController(IFileService fileService, IWebHostEnvironment webHostEnvironment)
        {
            _fileService = fileService;
            _webHostEnvironment = webHostEnvironment;
        }
        [HttpPost]
        public async Task<ActionResult<UploadImage>> Post()
        {
            
            if (HttpContext.Request.Form.Files.Count == 0) return StatusCode(StatusCodes.Status503ServiceUnavailable);
            try
            {
                var result = await _fileService
                    .UploadAsync(HttpContext.Request.Form.Files)
                    .ConfigureAwait(false);
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
                .DeleteAsync(deleteHash) //переделать
                .ConfigureAwait(false);

            return result ? Ok(result) : (IActionResult)BadRequest(result);

        }

    }
}
