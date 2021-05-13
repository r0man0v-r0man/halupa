using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.PolicyProviders
{
    public class HalupaSecurityLevelRequirement : IAuthorizationRequirement
    {
        public int Level { get; }
        public HalupaSecurityLevelRequirement(int level)
        {
            Level = level;
        }
    }
}
