using Microsoft.AspNetCore.Authorization;

namespace Extensions.PolicyProviders
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
