using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities.Common.Interfaces
{
    public interface IAuditableEntity
    {
        DateTime Created { get; set; }
        DateTime LastModified { get; set; }
    }
}
