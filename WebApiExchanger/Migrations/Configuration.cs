namespace WebApiExchanger.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApiExchanger.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApiExchanger.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "WebApiExchanger.Models.ApplicationDbContext";
        }

        protected override void Seed(WebApiExchanger.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            Currency curRUB = new Currency() { Id = 1, Name = "RUB" };
            Currency curUSD = new Currency() { Id = 2, Name = "USD" };
            Currency curEUR = new Currency() { Id = 3, Name = "EUR" };

            context.Currencies.AddOrUpdate( x => x.Id,
                curRUB,
                curUSD,
                curEUR
                    
            );

            context.Exchangers.AddOrUpdate( x => x.Id,
                new Exchanger() { Name = "Exchanger #1", CurrencyFrom = curRUB, CurrencyTo = curUSD },
                new Exchanger() { Name = "Exchanger #1", CurrencyFrom = curRUB, CurrencyTo = curEUR },
                new Exchanger() { Name = "Exchanger #2", CurrencyFrom = curUSD, CurrencyTo = curRUB },
                new Exchanger() { Name = "Exchanger #2", CurrencyFrom = curEUR, CurrencyTo = curRUB },
                new Exchanger() { Name = "Exchanger #3", CurrencyFrom = curUSD, CurrencyTo = curEUR },
                new Exchanger() { Name = "Exchanger #3", CurrencyFrom = curEUR, CurrencyTo = curUSD }
            );
        }
    }
}
