using NS_API.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.ServiceModel.Configuration;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace NS_API.Controllers
{
    public class NSApiController : ApiController
    {
        public string connectionstring = ConfigurationManager.AppSettings["ConnectionString"].ToString();
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/loginuser")]
        //public LoginResponse Login([FromBody] LoginRequest model)
        //{
        //    LoginResponse resp = new LoginResponse();
        //    try
        //    {

        //        if (model == null || string.IsNullOrEmpty(model.EmailID) || string.IsNullOrEmpty(model.Password))
        //        {
        //            resp.Status = "1";
        //            resp.Message = "Invalid Credentials";
        //        }
        //        string query = "SELECT * FROM UserMaster with(nolock) WHERE EmailID = @EmailID AND Password = @Password";
        //        SqlParameter[] parameters = {
        //            new SqlParameter("@EmailID", model.EmailID),
        //            new SqlParameter("@Password", model.Password)
        //        };
        //        DataSet ds = SqlHelper.ExecuteDataSetParam("Login", query, parameters);
        //        if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
        //        {
        //            resp.Status = "0";
        //            resp.Message = "Login Successful";
        //        }
        //        else
        //        {
        //            resp.Status = "1";
        //            resp.Message = "Login Failed";
        //        }

        //    }
        //    catch (Exception)
        //    {

        //    }
        //    return resp;
        //}
        public LoginResponse Login([FromBody] LoginRequest model)
        {
            LoginResponse resp = new LoginResponse();
            try
            {
                if (model == null || string.IsNullOrEmpty(model.EmailID) || string.IsNullOrEmpty(model.Password))
                {
                    resp.Status = "1";
                    resp.Message = "Invalid Credentials";
                    return resp;
                }

                string query = "SELECT * FROM UserMaster WITH(NOLOCK) WHERE EmailID = @EmailID AND Password = @Password";
                SqlParameter[] parameters = {
            new SqlParameter("@EmailID", model.EmailID),
            new SqlParameter("@Password", model.Password)
        };
                DataSet ds = SqlHelper.ExecuteDataSetParam("Login", query, parameters);

                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    DataRow row = ds.Tables[0].Rows[0];
                    resp.Status = "0";
                    resp.Message = "Login Successful";
                    resp.Role = row["Role"].ToString();
                }
                else
                {
                    resp.Status = "1";
                    resp.Message = "Login Failed";
                }
            }
            catch (Exception)
            {
                resp.Status = "1";
                resp.Message = "Error occurred";
            }
            return resp;
        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/registeruser")]
        public RegisterResponse Register([FromBody] RegisterRequest model)
        {
            RegisterResponse resp = new RegisterResponse();
            try
            {
                string query = "SELECT * FROM UserMaster with(nolock) WHERE EmailID = @EmailID";
                SqlParameter[] parameters = {
                new SqlParameter("@EmailID", model.EmailID)

    };
                DataSet ds = SqlHelper.ExecuteDataSetParam("", query, parameters);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    resp.Status = "1";
                    resp.Message = "User Exist";
                }
                else
                {
                    query = "Insert into UserMaster (Name,EmailID,Password) values(@Name,@EmailID,@Password)";
                    SqlParameter[] sqlParams1 = {
                    new SqlParameter("@Name", model.Name),
                new SqlParameter("@EmailID", model.EmailID),
                new SqlParameter("@Password", model.Password),
                };
                    int i = SqlHelper.ExecuteNonQueryParam("Register", query, sqlParams1);
                    if (i > 0)
                    {
                        resp.Status = "0";
                        resp.Message = "Data Inserted Successfully";
                    }
                    else
                    {
                        resp.Status = "1";
                        resp.Message = "Data Insertion Failed";
                    }
                }
              
            }
            catch (Exception)
            {
                throw;
            }
            return resp;
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/getusermanagedata")]
        public UserManagementResponse GetUserManageData()
        {
            UserManagementResponse resp = new UserManagementResponse();
            try
            {
                string query = "SELECT Srno, Name, EmailID FROM UserMaster WITH(NOLOCK)";
                DataSet ds = SqlHelper.ExecuteDataSet(query);
                if (ds.Tables[0].Rows.Count > 0)
                {  
                    var usersList = new List<User>();
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        usersList.Add(new User
                        {
                            Id = Convert.ToInt32(row["Srno"]),
                            Name = row["Name"].ToString(),
                            EmailID = row["EmailID"].ToString()
                        });
                    }
                    resp.Status = "0"; 
                    resp.Message = "Data Retrieved Successfully";
                    resp.Users = usersList; 
                }
                else
                {
                    resp.Status = "1"; 
                    resp.Message = "No data found.";
                }
            }
            catch (Exception ex)
            {
                resp.Status = "1";
                resp.Message = "Error: " + ex.Message;
            }
            return resp;
        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/updateusermaangedata")]
        public UserManagementResponse UpdateUserManageData([FromBody] UpdateUserManagementRequest model)
        {
            UserManagementResponse resp = new UserManagementResponse();
            try
            {
                string query = "Update UserMaster set Role=@Role where Srno=@Srno";
                SqlParameter[] parameters = {
               new SqlParameter("@Srno", model.Id),
               new SqlParameter("@Role", model.Role)
    };
                int i = SqlHelper.ExecuteNonQueryParam("updateusermaangedata", query, parameters);
                if (i > 0)
                {
                    resp.Status = "0";
                    resp.Message = "Data Fetched Successful";
                }
                else
                {
                    resp.Status = "0";
                    resp.Message = "Data Fetched Failed";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return resp;
        }

        [System.Web.Http.HttpDelete]
        [System.Web.Http.Route("api/deleteusermaangedata")]
        public UserManagementResponse DeleteUserManageData([FromBody] DeleteUserManagementRequest model)
        {
            UserManagementResponse resp = new UserManagementResponse();
            try
            {
                string query = "Delete from UserMaster where Srno=@Srno";
                SqlParameter[] parameters = {
        new SqlParameter("@Srno", model.Id),
    };
                int i = SqlHelper.ExecuteNonQueryParam("DeleteUserManageData", query, parameters);
                if (i > 0)
                {
                    resp.Status = "0";
                    resp.Message = "Data Deleted Successful";
                }
                else
                {
                    resp.Status = "0";
                    resp.Message = "Data Deletion Failed";
                }

            }
            catch (Exception)
            {
                throw;
            }
            return resp;
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/getproductsdata")]
        public ProductsResponse GetProductsData()
        {
            ProductsResponse resp = new ProductsResponse();
            try
            {
                string query = "SELECT Srno, ProductName,Price,Category,Tags,Vendor,Publishedon FROM Products WITH(NOLOCK)";
                DataSet ds = SqlHelper.ExecuteDataSet(query);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    var productsList = new List<Products>();
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        productsList.Add(new Products
                        {
                            Srno = Convert.ToInt32(row["Srno"]),
                            ProductsName = row["ProductName"].ToString(),
                            Price = row["Price"].ToString(),
                            Category = row["Category"].ToString(),
                            Vendor = row["Vendor"].ToString(),
                            Tags = row["Tags"].ToString(),
                            PublishedOn = row["PublishedOn"].ToString(),
                        });
                    }
                    resp.Status = "0";
                    resp.Message = "Data Retrieved Successfully";
                    resp.Products = productsList;
                }
                else
                {
                    resp.Status = "1";
                    resp.Message = "No data found.";
                }
            }
            catch (Exception ex)
            {
                resp.Status = "1";
                resp.Message = "Error: " + ex.Message;
            }
            return resp;
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/getcustomerdata")]
        public CustomersResponse GetCustomerData()
        {
            CustomersResponse resp = new CustomersResponse();
            try
            {
                string query = "SELECT Srno, Customer,EmailId,Orders,TotalSpent,City,Lastseen,Lastorder FROM CustomerDetails WITH(NOLOCK)";
                DataSet ds = SqlHelper.ExecuteDataSet(query);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    var customersList = new List<Customers>();
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        customersList.Add(new Customers
                        {
                            Srno = Convert.ToInt32(row["Srno"]),
                            Customer = row["Customer"].ToString(),
                            EmailId = row["EmailId"].ToString(),
                            Orders = row["Orders"].ToString(),
                            TotalSpent = row["TotalSpent"].ToString(),
                            City = row["City"].ToString(),
                            LastSeen = row["LastSeen"].ToString(),
                            LastOrder = row["LastOrder"].ToString(),
                        });
                    }
                    resp.Status = "0";
                    resp.Message = "Data Retrieved Successfully";
                    resp.Customers = customersList;
                }
                else
                {
                    resp.Status = "1";
                    resp.Message = "No data found.";
                }
            }
            catch (Exception ex)
            {
                resp.Status = "1";
                resp.Message = "Error: " + ex.Message;
            }
            return resp;
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/getorders")]
        public OrdersResponse Getorders()
        {
            OrdersResponse resp = new OrdersResponse();
            try
            {
                string query = "SELECT Srno,OrderNo,Total,CustomerName,PaymentStatus,FulfillementStatus,Deliverytype,Date FROM Orders WITH(NOLOCK)";
                DataSet ds = SqlHelper.ExecuteDataSet(query);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    var ordersList = new List<Orders>();
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        ordersList.Add(new Orders
                        {
                            Srno = Convert.ToInt32(row["Srno"]),
                            OrderNo = row["OrderNo"].ToString(),
                            Total = row["Total"].ToString(),
                            CustomerName = row["CustomerName"].ToString(),
                            PaymentStatus = row["PaymentStatus"].ToString(),
                            FulfillementStatus = row["FulfillementStatus"].ToString(),
                            DeliveryType = row["DeliveryType"].ToString(),
                            Date = row["Date"].ToString(),
                        });
                    }
                    resp.Status = "0";
                    resp.Message = "Data Retrieved Successfully";
                    resp.Order = ordersList;
                }
                else
                {
                    resp.Status = "1";
                    resp.Message = "No data found.";
                }
            }
            catch (Exception ex)
            {
                resp.Status = "1";
                resp.Message = "Error: " + ex.Message;
            }
            return resp;
        }
        public OrdersResponse GetProducts()
        {
            OrdersResponse resp = new OrdersResponse();
            try
            {
                string query = "SELECT Srno,OrderNo,Total,CustomerName,PaymentStatus,FulfillementStatus,Deliverytype,Date FROM Orders WITH(NOLOCK)";
                DataSet ds = SqlHelper.ExecuteDataSet(query);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    var ordersList = new List<Orders>();
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        ordersList.Add(new Orders
                        {
                            Srno = Convert.ToInt32(row["Srno"]),
                            OrderNo = row["ProductNo"].ToString(),
                            Total = row["TotalProducts"].ToString(),
                            CustomerName = row["ProductName"].ToString(),
                            PaymentStatus = row["PaymentStatus"].ToString(),
                            FulfillementStatus = row["ProductStatus"].ToString(),
                            DeliveryType = row["ProductDeliveryType"].ToString(),
                            Date = row["ProductDate"].ToString(),
                        });
                    }
                    resp.Status = "0";
                    resp.Message = "Data Retrieved Successfully";
                    resp.Order = ordersList;
                }
                else
                {
                    resp.Status = "1";
                    resp.Message = "No data found.";
                }
            }
            catch (Exception ex)
            {
                resp.Status = "1";
                resp.Message = "Error: " + ex.Message;
            }
            return resp;
        }

        public OrdersResponse GetProductsresp()
        {
            OrdersResponse resp = new OrdersResponse();
            try
            {
                string query = "SELECT Srno,OrderNo,Total,CustomerName,PaymentStatus,FulfillementStatus,Deliverytype,Date FROM Orders WITH(NOLOCK)";
                DataSet ds = SqlHelper.ExecuteDataSet(query);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    var ordersList = new List<Orders>();
                    foreach (DataRow row in ds.Tables[0].Rows)
                    {
                        ordersList.Add(new Orders
                        {
                            Srno = Convert.ToInt32(row["Srno"]),
                            OrderNo = row["ProductNo"].ToString(),
                            Total = row["TotalProducts"].ToString(),
                            CustomerName = row["ProductName"].ToString(),
                            PaymentStatus = row["PaymentStatus"].ToString(),
                            FulfillementStatus = row["ProductStatus"].ToString(),
                            DeliveryType = row["ProductDeliveryType"].ToString(),
                            Date = row["ProductDate"].ToString(),
                            FullfillmentDate = row["FullfillmeDate"].ToString(),
                        });
                    }
                    resp.Status = "0";
                    resp.Message = "Data Retrieved Successfully";
                    resp.Order = ordersList;
                }
                else
                {
                    resp.Status = "1";
                    resp.Message = "No data found.";
                }
            }
            catch (Exception ex)
            {
                resp.Status = "1";
                resp.Message = "Error: " + ex.Message;
            }
            return resp;
        }
    }
}
