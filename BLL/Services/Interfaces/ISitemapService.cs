using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace BLL.Services.Interfaces
{
    public interface ISitemapService
    {
        Task<XDocument> GetSitemapAsync();
    }
}
