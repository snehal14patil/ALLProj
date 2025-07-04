using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NS_API.Models
{
    public class Products
    {
        public int Srno { get; set; }
        public string ProductsName { get; set; }
        public string Price { get; set; }
        public string Category { get; set; }
        public string Vendor { get; set; }
        public string Tags { get; set; }
        public string PublishedOn { get; set; }
    }
    public class ProductsResponse
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public List<Products> Products { get; set; }
    }
}