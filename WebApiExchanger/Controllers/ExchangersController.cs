using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiExchanger.Models;

namespace WebApiExchanger.Controllers
{
    public class ExchangersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Exchangers
        public IQueryable<Exchanger> GetExchangers()
        {
            return db.Exchangers;
        }

        // GET: api/Exchangers/5
        [ResponseType(typeof(Exchanger))]
        public async Task<IHttpActionResult> GetExchanger(int id)
        {
            Exchanger exchanger = await db.Exchangers.FindAsync(id);
            if (exchanger == null)
            {
                return NotFound();
            }

            return Ok(exchanger);
        }

        // PUT: api/Exchangers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutExchanger(int id, Exchanger exchanger)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != exchanger.Id)
            {
                return BadRequest();
            }

            db.Entry(exchanger).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExchangerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Exchangers
        [ResponseType(typeof(Exchanger))]
        public async Task<IHttpActionResult> PostExchanger(Exchanger exchanger)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Exchangers.Add(exchanger);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = exchanger.Id }, exchanger);
        }

        // DELETE: api/Exchangers/5
        [ResponseType(typeof(Exchanger))]
        public async Task<IHttpActionResult> DeleteExchanger(int id)
        {
            Exchanger exchanger = await db.Exchangers.FindAsync(id);
            if (exchanger == null)
            {
                return NotFound();
            }

            db.Exchangers.Remove(exchanger);
            await db.SaveChangesAsync();

            return Ok(exchanger);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExchangerExists(int id)
        {
            return db.Exchangers.Count(e => e.Id == id) > 0;
        }
    }
}