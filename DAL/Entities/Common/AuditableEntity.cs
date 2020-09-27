using DAL.Entities.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities.Common
{
    public abstract class AuditableEntity : IAuditableEntity
    {
        public DateTime Created { get; set; }
        public DateTime LastModified { get; set; }
    }
}
