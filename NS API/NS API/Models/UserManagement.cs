using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NS_API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailID { get; set; }
    }
    public class UserManagementResponse
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public List<User> Users { get; set; }
    }

    public class UpdateUserManagementRequest
    {
        public int Id { get; set; }
        public int Role { get; set; }
    }
    public class DeleteUserManagementRequest
    {
        public int Id { get; set; }
       
    }
}