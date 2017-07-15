using System.Linq;
using System.Web.Http.Description;
using System.Web.Http;
using WebApiExchanger.Models;

namespace WebApiExchanger.Controllers
{
    [Authorize]
    public class CurrencyController : ApiController
    {
        private ApplicationDbContext db = ApplicationDbContext.Create();

        // GET: api/Currency
        [ResponseType(typeof(Currency))]
        public IQueryable<Currency> GetCurrencies()
        {
            return db.Currencies.AsQueryable();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}