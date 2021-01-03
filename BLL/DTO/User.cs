using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace BLL.DTO
{
    public class User
    {
        /// <summary>
        /// Unique identificator
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// User Name - Login
        /// </summary>
        public string UserName { get; set; }
        public string NormalizedUserName { get; set; }
        public string Password { get; set; }
    }
}
