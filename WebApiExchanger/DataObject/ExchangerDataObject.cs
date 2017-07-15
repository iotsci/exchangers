using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiExchanger.DataObject
{
    public class ExchangerDataObject
    {
        public string ExchangerName { get; set; }

        public string CurrencyFromName { get; set; }

        public string CurrencyToName { get; set; }
    }
}