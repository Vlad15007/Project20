using Microsoft.AspNetCore.Mvc;

namespace Project20.Controllers
{
    public class ChatController : Controller
    {
        public IActionResult Chat()
        {
            return View();
        }
    }
}
