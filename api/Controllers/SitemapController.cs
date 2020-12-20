using System;
using System.Threading.Tasks;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SitemapController : ControllerBase
    {
        private readonly ISitemapService _sitemapService;

        public SitemapController(ISitemapService sitemapService)
        {
            _sitemapService = sitemapService;
        }

        [Route("/sitemap.xml")]
        public async Task<IActionResult> Sitemap()
        {
            try
            {
                var doc = await _sitemapService
                    .GetSitemapAsync()
                    .ConfigureAwait(false);

                return Content(doc.ToString());
            }
            catch (Exception e)
            {
                return BadRequest(e);

                throw;

            }
            
        }
    }
}
