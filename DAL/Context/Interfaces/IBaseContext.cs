using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DAL.Context.Interfaces
{
    public interface IBaseContext
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
