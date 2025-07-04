using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NS_API.Models
{
    public class Customers
    {
        public int Srno { get; set; }
        public string Customer { get; set; }
        public string EmailId { get; set; }
        public string Orders { get; set; }
        public string TotalSpent { get; set; }
        public string City { get; set; }
        public string LastSeen { get; set; }
        public string LastOrder { get; set; }
    }

    public class CustomersResponse
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public List<Customers> Customers { get; set; }
    }
}