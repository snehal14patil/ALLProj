using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NS_API.Models
{
    public class RegisterRequest
    {
        public string Name { get; set; }
        public string EmailID { get; set; }
        public string Password { get; set; }
    }
    public class RegisterResponse
    {
        public string Status { get; set; }
        public string Message { get; set; }

    }
}