using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApiExchanger.Models
{
    public class Currency
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
