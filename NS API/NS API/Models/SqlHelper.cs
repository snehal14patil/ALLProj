using NLog;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Odbc;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace NS_API.Controllers
{
    public class SqlHelper
    {
       
        public static string ConnectionString = ConfigurationManager.AppSettings["ConnectionString"].ToString();
        public static Int32 CommandTimeout = Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["DBCommandTimeout"].ToString());
        private static readonly ILogger logger = LogManager.GetCurrentClassLogger();
        public static string ExecuteScalar(string qry)
        {
            string ret = "0";
            SqlTransaction transaction;
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                con.Open();
             
                transaction = con.BeginTransaction();
                try
                {
                    using (SqlCommand command = new SqlCommand(qry, con, transaction))
                    {

                        ret = command.ExecuteScalar().ToString();
                        transaction.Commit();
                    }
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    throw ex;
                }
                finally
                {
                    if (con.State != ConnectionState.Closed)
                    {
                        con.Close();
                    }
                }
            }
            return ret;
        }
        public static int ExecuteNonQuery(string qry)
        {
            int ret = 0;
            SqlTransaction transaction;
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                con.Open();
                transaction = con.BeginTransaction();
                try
                {

                    using (SqlCommand command = new SqlCommand(qry, con, transaction))
                    {
                        command.CommandTimeout = CommandTimeout;
                        ret = command.ExecuteNonQuery();
                        transaction.Commit();
                    }
                }
                catch (Exception ex)
                {
                    logger.Error("Exception from " + ex.TargetSite.Name + " Error in ExecuteNonQuery :" + ex.Message);
                    transaction.Rollback();
                    throw ex;
                }
                finally
                {
                    if (con.State != ConnectionState.Closed)
                    {
                        con.Close();
                    }
                }
            }
            return ret;
        }
        public static int ExecuteNonQuery_(string qrystring, string conectionStrin)
        {
            int ret = 0;
            using (SqlConnection con = new SqlConnection(conectionStrin))
            {
                con.Open();
                try
                {

                    using (SqlCommand command = new SqlCommand(qrystring, con))
                    {
                        ret = command.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    logger.Error(ex," - Exception from " + ex.TargetSite.Name + " Error in ExecuteNonQuery_ :" + ex.Message);
                    throw ex;
                }
                finally
                {
                    if (con.State != ConnectionState.Closed)
                    {
                        con.Close();
                    }
                }
            }
            return ret;
        }
        public static DataSet ExecuteDataSet_(string qry, string conectionStrin)
        {
            try
            {
                using (SqlDataAdapter mySqlDA = new SqlDataAdapter(qry, conectionStrin))
                {
                    DataSet dsControlData = new DataSet();
                    mySqlDA.Fill(dsControlData);
                    return dsControlData;
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex,  " - Exception from " + ex.TargetSite.Name + " Error in ExecuteDataset :" + ex.Message);
                throw ex;
            }
            finally
            {

            }
        }

        public static DataSet ExecuteDataSet(string qry)
        {
            try
            {
                using (SqlDataAdapter mySqlDA = new SqlDataAdapter(qry, ConnectionString))
                {
                    mySqlDA.SelectCommand.CommandTimeout = CommandTimeout;
                    DataSet dsControlData = new DataSet();
                    mySqlDA.Fill(dsControlData);
                    return dsControlData;
                }
            }
            catch (Exception ex)
            {
               logger.Error(ex,  " - Exception from " + ex.TargetSite.Name + " Error in ExecuteDataset :" + ex.Message);
                throw ex;
            }
            finally
            {

            }
        }
        public static int ExecuteNonQueryParam(string methodname, string strSql, SqlParameter[] param)
        {
            //SqlTransaction transaction = null;
            int ret = 0;
            try
            {
                ILogger logger = LogManager.GetLogger(methodname);
                using (SqlConnection sqlConn = new SqlConnection(ConnectionString))
                {
                    
                    sqlConn.Open();
                    //transaction = sqlConn.BeginTransaction();
                    using (SqlCommand cmd = new SqlCommand(strSql, sqlConn))
                    {
                        //logger.Debug(" - Query : " + strSql);
                        if (param != null)
                        {
                            for (int i = 0; i < param.Length; i++)
                            {
                                cmd.Parameters.Add(param[i]);
                             //  logger.Debug(" - Paramters " + i + " " + param[i].Value);
                            }
                        }
                        ret = cmd.ExecuteNonQuery();
                        //transaction.Commit();
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex,  " - Exception from " + ex.TargetSite.Name + " Error in ExecuteNonQueryParam :" + ex.Message);
                //transaction.Rollback();
                throw ex;
            }
            finally
            {
            }
            return ret;
        }
        public static int ExecuteNonQueryParamRemote(string strSql, SqlParameter[] param)
        {
            SqlTransaction transaction = null;
            int ret = 0;
            try
            {
                using (SqlConnection sqlConn = new SqlConnection(ConnectionString))
                {
                    sqlConn.Open();
                    transaction = sqlConn.BeginTransaction();
                    using (SqlCommand cmd = new SqlCommand(strSql, sqlConn, transaction))
                    {
                        if (param != null)
                        {
                            for (int i = 0; i < param.Length; i++)
                            {
                                cmd.Parameters.Add(param[i]);
                            }
                        }
                        ret = cmd.ExecuteNonQuery();
                        transaction.Commit();
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex,  " - Exception from " + ex.TargetSite.Name + " Error in ExecuteNonQueryParamRemote :" + ex.Message);
                transaction.Rollback();
                throw ex;
            }
            return ret;
        }
        public static DataSet ExecuteDataSetParam(string methodname,string strSql, SqlParameter[] param)
        {
            DataSet ds = new DataSet();
            ILogger logger = LogManager.GetLogger(methodname);
            try
            {
                using (SqlConnection sqlConn = new SqlConnection(ConnectionString))
                {
                    sqlConn.Open();
                    using (SqlCommand cmd = new SqlCommand(strSql, sqlConn))
                    {
                        cmd.CommandTimeout = CommandTimeout;
                      //logger.Debug(" - Query : " + strSql);
                        using (SqlDataAdapter sqlda = new SqlDataAdapter())
                        {
                            if (param != null)
                            {
                                for (int i = 0; i < param.Length; i++)
                                {
                                    cmd.Parameters.Add(param[i]);
                                    //logger.Debug(" - Paramters " + i + " " + param[i].Value);
                                }
                            }
                            sqlda.SelectCommand = cmd;
                            sqlda.Fill(ds);
                            return ds;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
               logger.Error(ex," - Exception from " + ex.TargetSite.Name + " Error in ExecuteDatasetParam :" + ex.Message);
                throw;
            }
        }

        public static DataSet ExecuteDataSetProc(string procedurename, SqlParameter[] param, string constring)
        {
            SqlConnection con = new SqlConnection(constring);
            try
            {
                using (SqlCommand cmd = new SqlCommand(procedurename, con))
                {
                    using (SqlDataAdapter da = new SqlDataAdapter())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandTimeout = CommandTimeout;
                        if (param != null)
                        {
                            for (int i = 0; i < param.Length; i++)
                            {
                                cmd.Parameters.AddWithValue(param[i].ParameterName, param[i].Value);
                            }
                        }
                        DataSet dsControlData = new DataSet();
                        da.SelectCommand = cmd;
                        da.Fill(dsControlData);
                        return dsControlData;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static List<string> ReplaceNullList(List<string> val)
        {
            List<string> resp = null;
            if (val == null)
            {
                resp = new List<string>();
            }
            else
            {
                resp = val;
            }
            return resp;
        }

        public static string ReplaceNull(string val)
        {
            string resp = "";
            if (string.IsNullOrEmpty(val))
            {
                resp = "";
            }
            else if (val == "--Select--")
            {
                resp = "";
            }
            else
            {
                resp = val;
            }
            return resp;
        }
        public static string GetTransId()
        {
            string Id;
            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand command = new SqlCommand("dbo.GenerateTransId", conn))
                    {
                        command.CommandType = System.Data.CommandType.StoredProcedure;
                        command.Parameters.Add(new SqlParameter("@trans_id", SqlDbType.Int, 20));
                        command.Parameters["@trans_id"].Direction = ParameterDirection.Output;
                        command.ExecuteNonQuery();
                        int transId = int.Parse(command.Parameters["@trans_id"].Value.ToString());
                        Id = transId.ToString("000000");
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                finally
                {
                    if (conn.State != ConnectionState.Closed)
                    {
                        conn.Close();
                    }
                    conn.Dispose();
                }
                return Id;
            }
        }
        public static DataSet ExecuteODBCDataSet(string qry)
        {
            using (OdbcConnection cn = new OdbcConnection(ConnectionString))
            {
                try
                {
                    cn.Open();
                    OdbcDataAdapter oad = new OdbcDataAdapter(qry, cn);
                    DataSet ds = new DataSet();
                    oad.Fill(ds);
                    return ds;
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                finally
                {
                    if (cn.State != ConnectionState.Closed)
                    {
                        cn.Close();
                    }
                    cn.Dispose();
                }
            }
        }

        public static string get_next_id(string UserID, string P_TRAN_TYPE)
        {
            string functionReturnValue = "";
            try
            {
               logger.Info("generating next seq number for type: " + P_TRAN_TYPE + " for user: " + UserID);
                DataSet DS = null;
                SqlConnection MyCon = default(SqlConnection);
                SqlDataAdapter MyDA = default(SqlDataAdapter);
                MyCon = new SqlConnection(ConnectionString);
                MyDA = new SqlDataAdapter("sp_gen_serial", MyCon);
                MyDA.SelectCommand.CommandTimeout = 500;
                MyDA.SelectCommand.CommandType = CommandType.StoredProcedure;

                MyDA.SelectCommand.Parameters.Add(new SqlParameter("@P_TRAN_TYPE", SqlDbType.VarChar, 20));
                MyDA.SelectCommand.Parameters["@P_TRAN_TYPE"].Value = P_TRAN_TYPE;

                MyDA.SelectCommand.Parameters.Add(new SqlParameter("@USER_ID", SqlDbType.VarChar, 20));
                MyDA.SelectCommand.Parameters["@USER_ID"].Value = UserID;

                MyDA.SelectCommand.Parameters.Add(new SqlParameter("@P_SERIAL", SqlDbType.VarChar, 20));
                MyDA.SelectCommand.Parameters["@P_SERIAL"].Direction = ParameterDirection.Output;
                logger.Info("calling procedure genleadcode");
                DS = new DataSet();
                MyDA.Fill(DS, "genleadcode");
                functionReturnValue = MyDA.SelectCommand.Parameters[2].Value.ToString();
                logger.Info("Next seq number generated: " + functionReturnValue);
                MyDA.Dispose();
                MyCon.Close();
            }
            catch (Exception ex)
            {
               logger.Error(ex, "Error in get_next_id: " + ex.Message.ToString());
            }
            return functionReturnValue;
        }

        //public static DataSet pgexecutedataset(string qry, string conn)
        //{
        //    NpgsqlConnection connection = new NpgsqlConnection();
        //    DataSet ds = new DataSet();
        //    try
        //    {
        //        connection.ConnectionString = conn;
        //        connection.Open();
        //        qry = ParseQueryandReturnForPostgres(qry);
        //        NpgsqlCommand cmd = new NpgsqlCommand();
        //        cmd.Connection = connection;
        //        cmd.CommandText = qry;
        //        cmd.CommandTimeout = CommandTimeout;
        //        cmd.CommandType = CommandType.Text;
        //        NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
        //        da.Fill(ds);
        //        cmd.Dispose();
        //        connection.Close();
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //    finally
        //    {
        //        if (connection.State != ConnectionState.Closed)
        //        {
        //            connection.Close();
        //        }
        //        connection.Dispose();
        //    }
        //    return ds;
        //}

        private static string ParseQueryandReturnForPostgres(string query)
        {
        starthandler:
            query = query.Replace(" Top ", " top ").Replace(" TOP ", " top ");
            query = query.Replace(" AS '", " as '").Replace(" As '", " as '");
            query = query.Replace(" AS [", " as [").Replace(" As [", " as [");
            string top_str = " top ";
            string as_str = " as '";
            string bracket_str = " as [";
            string date_str = "convert(";
            string ifexists_str = "if exists (";
            string dblqot;
            //dblqot = Strings.Chr(34); // "\""
            //dblqot = (Char(34)).to; // "\""
            dblqot = Convert.ToString((Char)34);
            if (query.Contains(top_str))
            {
                Int32 startindex = query.IndexOf(top_str, 0);
                Int32 endindex = query.IndexOf(" ", startindex + top_str.Length);
                string topNumber = query.Substring(startindex, endindex - startindex).Replace(top_str, "");
                string replacequery = query.Replace(top_str + topNumber, "") + " limit " + topNumber;
                query = replacequery;
            }
            else if (query.Contains(as_str))
            {
                Int32 startindex = query.IndexOf(as_str, 0);
                Int32 endindex = query.IndexOf("'", startindex + as_str.Length);
                string fieldalias = query.Substring(startindex + as_str.Length, endindex - (startindex + as_str.Length));
                query = query.Replace(as_str + fieldalias + "'", as_str.Replace("'", dblqot) + fieldalias + dblqot);
                goto starthandler;
            }
            else if (query.Contains(bracket_str))
            {
                Int32 startindex = query.IndexOf(bracket_str, 0);
                Int32 endindex = query.IndexOf("]", startindex + bracket_str.Length);
                string fieldalias = query.Substring(startindex + bracket_str.Length, endindex - (startindex + bracket_str.Length));
                query = query.Replace(bracket_str + fieldalias + "]", bracket_str.Replace("[", dblqot) + fieldalias + dblqot);
                goto starthandler;
            }
            else if (query.Contains(date_str))
            {
                Int32 startindex = query.IndexOf(date_str, 0);
                Int32 endindex = query.IndexOf(",", startindex + date_str.Length);
                Int32 endindex2 = query.IndexOf(")", startindex + date_str.Length);
                string datetimestring = query.Substring(startindex, endindex2 - startindex + 1);
                Int32 posiion = 0;
            datetimefactor:
                Int32 datetimenumberindex = datetimestring.IndexOf(",", posiion);
                if (datetimenumberindex != -1)
                {
                    posiion = datetimenumberindex + 1;
                    goto datetimefactor;
                }
                string dateFormatnumber = datetimestring.Substring(posiion, datetimestring.Length - 1 - posiion);
                string datetimeformat = "dd-MM-yyyy";
                if (dateFormatnumber == "105")
                    datetimeformat = "DD-MM-yyyy";
                else if (dateFormatnumber == "108")
                    datetimeformat = "HH24:MI:SS";
                string fieldalias = query.Substring(startindex + date_str.Length, endindex - (startindex + date_str.Length));
                Int32 textindex = query.IndexOf(",", endindex + 1);
                string actualfieldalias = query.Substring(endindex + 1, textindex - (startindex + date_str.Length + fieldalias.Length));
                Int32 textendindex = query.IndexOf(")", startindex + date_str.Length + fieldalias.Length);
                string dateFormatValue = query.Substring(textindex + 1, textendindex - (startindex + date_str.Length + fieldalias.Length + actualfieldalias.Length));
                query = query.Replace(date_str + fieldalias + "," + actualfieldalias + dateFormatValue, "to_char(" + actualfieldalias + " '" + datetimeformat + "')");

                goto starthandler;
            }
            else if (query.Contains(ifexists_str))
            {
                query = "DO $$ BEGIN " + query + "end if;End$$;";
                Int32 startindex = query.IndexOf(ifexists_str, 0);
                Int32 endindex = query.IndexOf("update", startindex + ifexists_str.Length);
                if ((endindex <= 0))
                    endindex = query.IndexOf(")", startindex + ifexists_str.Length);
                string fieldalias = query.Substring(startindex + ifexists_str.Length, endindex - (startindex + ifexists_str.Length));
                query = query.Replace(ifexists_str + fieldalias, ifexists_str + fieldalias + " Then ");
            }
            //string tempdata = query;
            if (query.Contains("to_char(createdon, 'DD-MM-yyyy') + ' ' + to_char(createdon, 'HH24:MI:SS')"))
                query = query.Replace("to_char(createdon, 'DD-MM-yyyy') + ' ' + to_char(createdon, 'HH24:MI:SS')", "concat(to_char(createdon, 'dd-MM-yyyy'),' ',to_char(createdon, 'HH24:MI:SS'))");
            query = query.Replace("with (nolock)", "").Replace("with(nolock)", "").Replace("[", "").Replace("]", "").Replace("dbo.", "").Replace("isnull(", "coalesce(").Replace("getdate()", "now()");
            return query;
        }


    }
}