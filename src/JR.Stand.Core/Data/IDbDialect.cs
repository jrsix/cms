//
//
//  Generated by StarUML(tm) C# Add-In
//
//  @ Project : OPS.Data
//  @ File Name : IDbDialect.cs
//  @ Date : 8/18/2011
//  @ Author : ????
//  @ Description : 
//       SQLite仅适合单机
//

using System;
using System.Collections.Generic;
using System.Data.Common;

namespace JR.Stand.Core.Data
{
    /// <summary>
    /// 中间件
    /// </summary>
    /// <param name="action"></param>
    /// <param name="sql"></param>
    /// <param name="sqlParams"></param>
    /// <param name="exc"></param>
    /// <returns></returns>
    public delegate bool Middleware(String action, String sql, DbParameter[] sqlParams, Exception exc);

    /// <summary>
    /// 影响行的SQL函数
    /// </summary>
    /// <param name="sql"></param>
    /// <returns></returns>
    public delegate int RowAffect(string sql);

    /// <summary>
    /// 数据读取器函数
    /// </summary>
    /// <param name="reader"></param>
    public delegate void DataReaderFunc(DbDataReader reader);

    /// <summary>
    /// 数据库方言
    /// </summary>
    public interface IDbDialect
    {
        /// <summary>
        /// 获取连接字符串
        /// </summary>
        /// <returns></returns>
        string GetConnectionString();
        /// <summary>
        /// 获取连接
        /// </summary>
        /// <returns></returns>
        DbConnection GetConnection();

        /// <summary>
        /// 创建参数
        /// </summary>
        /// <param name="name"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        DbParameter CreateParameter(string name, object value);

        /// <summary>
        /// 转换参数字典为参数数组
        /// </summary>
        /// <param name="paramMap"></param>
        /// <returns></returns>
        DbParameter[] ParseParameters(IDictionary<String, Object> paramMap);

        /// <summary>
        /// 创建命令
        /// </summary>
        /// <param name="query">查询语句</param>
        /// <returns></returns>
        DbCommand CreateCommand(string query);

        /// <summary>
        /// 创建数据适配器
        /// </summary>
        /// <param name="conn">连接</param>
        /// <param name="query">查询语句</param>
        /// <returns></returns>
        DbDataAdapter CreateDataAdapter(DbConnection conn, string query);

        /// <summary>
        /// 执行SQL脚本
        /// </summary>
        /// <param name="conn">连接</param>
        /// <param name="r">处理受影响的行</param>
        /// <param name="sql">SQL语句</param>
        /// <param name="delimiter">分割符</param>
        /// <returns></returns>
        int ExecuteScript(DbConnection conn, RowAffect r, string sql, string delimiter);
    }
}