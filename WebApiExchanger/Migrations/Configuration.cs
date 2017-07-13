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

            context.Exchangers.AddOrUpdate(x => x.Id,
                    new Exchanger() { Name = "RUB" },
                    new Exchanger() { Name = "EUR" },
                    new Exchanger() { Name = "USD" }
                );
        }
    }
}
