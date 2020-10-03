using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Context.Interfaces
{
    public interface IContextFactory : IDisposable
    {
        IHalupaContext GetHalupaContext();
    }
}
