using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NS_API.Models
{
   
    public class LoginRequest
    {
        public string EmailID { get; set; }
        public string Password { get; set; }
       
    }
    public class LoginResponse
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public string Role { get; set; }

    }
}