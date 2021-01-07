using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class UploadImage
    {
        /// <summary>
        /// 60px
        /// </summary>
        public string Icon { get; set; }
        /// <summary>
        /// 250px
        /// </summary>
        public string Small { get; set; }
        /// <summary>
        /// 600px
        /// </summary>
        public string Middle { get; set; }
        /// <summary>
        /// 1000px
        /// </summary>
        public string Full { get; set; }
    }
}
