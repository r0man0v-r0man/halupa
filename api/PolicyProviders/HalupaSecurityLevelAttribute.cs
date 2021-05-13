using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.PolicyProviders
{
    public class HalupaSecurityLevelAttribute : AuthorizeAttribute
    {
        public HalupaSecurityLevelAttribute(int level)
        {
            Policy = $"{HalupaPolicies.SecurityLevel}.{level}";
        }
    }
}
