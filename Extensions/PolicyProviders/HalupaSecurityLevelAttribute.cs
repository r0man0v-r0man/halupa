using Microsoft.AspNetCore.Authorization;

namespace Extensions.PolicyProviders
{
    public class HalupaSecurityLevelAttribute : AuthorizeAttribute
    {
        public HalupaSecurityLevelAttribute(int level)
        {
            Policy = $"{HalupaPolicies.SecurityLevel}.{level}";
        }
    }
}
