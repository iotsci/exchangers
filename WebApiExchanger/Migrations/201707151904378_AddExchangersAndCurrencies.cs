namespace WebApiExchanger.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddExchangersAndCurrencies : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Currencies",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Exchangers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        CurrencyFrom_Id = c.Int(),
                        CurrencyTo_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Currencies", t => t.CurrencyFrom_Id)
                .ForeignKey("dbo.Currencies", t => t.CurrencyTo_Id)
                .Index(t => t.CurrencyFrom_Id)
                .Index(t => t.CurrencyTo_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Exchangers", "CurrencyTo_Id", "dbo.Currencies");
            DropForeignKey("dbo.Exchangers", "CurrencyFrom_Id", "dbo.Currencies");
            DropIndex("dbo.Exchangers", new[] { "CurrencyTo_Id" });
            DropIndex("dbo.Exchangers", new[] { "CurrencyFrom_Id" });
            DropTable("dbo.Exchangers");
            DropTable("dbo.Currencies");
        }
    }
}
