using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApiExchanger.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Exchanger";

            return View("Common");
        }

        public ActionResult RegisterOrLogin()
        {
            return View();
        }

        [Authorize]
        public ActionResult Exchanger()
        {
            // При переходе по полному адресу или обновлении страницы, нужно вернуть основную страницу 
            // Дальше все сделает angular
            return Index();
        }

        [Authorize]
        public ActionResult RealExchanger()
        {
            return View();
        }
    }
}
