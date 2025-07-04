using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NS_API.Models
{
    public class Orders
    {
        public int Srno { get; set; }
        public string OrderNo { get; set; }
        public string Total { get; set; }
        public string CustomerName { get; set; }
        public string PaymentStatus { get; set; }
        public string FulfillementStatus { get; set; }
        public string DeliveryType { get; set; }
        public string Date { get; set; }
        public string FullfillmentDate { get; set; }
        public string OrderType { get; set; }
    }
   

    public class OrdersResponse
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public List<Orders> Order { get; set; }
    }
}