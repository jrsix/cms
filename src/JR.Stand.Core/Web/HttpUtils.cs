using System;
using JR.Stand.Abstracts.Web;

namespace JR.Stand.Core.Web
{
    public static class HttpUtils
    {
        
        /// <summary>
        /// 是否通过代理https请求
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public static bool IsProxyHttpsRequest(ICompatibleRequest request)
        {
            // nginx反向代理
            if (request.GetHeader("X-Forwarded-Proto") == "https") return true;
            // 兼容西部数码虚拟主机
            if (request.GetHeader("SSL-FLAG") == "SSL" || request.GetHeader("From-Https") == "on") return true;
            return false;
        }
    }
}