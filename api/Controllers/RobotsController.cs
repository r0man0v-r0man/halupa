using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RobotsController : ControllerBase
    {
        [Route("/robots.txt")]
        public IActionResult Robots()
        {
            var robots =
                "User-agent: * \n" +
                "Allow: / \n" +
                "Disallow: /register \n" +
                "Disallow: /add \n" +
                "Disallow: /login \n" +
                "Disallow: /cabinet \n";
            return Content(robots);
        }
    }
}
