using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiExchanger.Models
{
    public class Exchanger
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public Currency CurrencyFrom { get; set; }

        public Currency CurrencyTo { get; set; }
    }
}
