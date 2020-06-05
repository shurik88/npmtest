using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Abbyy.EduSystem.Frontend.Controllers
{
    public class HomeController : Controller
    {

        [AllowAnonymous]
        [Route("{*url}")]
        public IActionResult Index(string url)
        {
            //до этого экшн не должны доходить маршруты начинающиеся с API
            //маршруты начинающиеся с API должны пойматься раньше
            if (!string.IsNullOrEmpty(url) && url.StartsWith("api/"))
                return NotFound();

            return View();
        }
    }
}
