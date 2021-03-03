using System;
using System.Threading.Tasks;
using BLL.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SitemapController : ControllerBase
    {
        private readonly ISitemapService _sitemapService;
        private readonly ILogger<SitemapController> _logger;
        public SitemapController(ISitemapService sitemapService, ILogger<SitemapController> logger)
        {
            _sitemapService = sitemapService;
            _logger = logger;
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
                _logger.LogError(nameof(Sitemap), e);
                return BadRequest();
            }
            
        }
    }
}
