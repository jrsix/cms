﻿/*
* Copyright(C) 2010-2012 fze.NET
* 
* File Name	: PropertyUI
* author_id	: Newmin (new.min@msn.com)
* Create	: 2012/9/30 9:45:29
* Description	:
*
*/


namespace JR.Cms.Domain.Interface.Enum
{
    /// <summary>
    /// 模块属性UI类型
    /// </summary>
    public enum PropertyUI
    {
        /// <summary>
        /// 文本
        /// </summary>
        Text = 1,

        /// <summary>
        /// 多行文本
        /// </summary>
        MultiLine = 2,

        /// <summary>
        /// 数字
        /// </summary>
        Integer = 3,


        /// <summary>
        /// 检查框
        /// </summary>
        Checkbox = 4,

        /// <summary>
        /// 上传控件
        /// </summary>
        Upload = 5,

        /// <summary>
        /// 选择
        /// </summary>
        Select = 6,
    }
}