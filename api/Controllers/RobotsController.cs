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
                "Allow: /$ \n" +
                "Disallow: / \n";
            return Content(robots);
        }
    }
}
