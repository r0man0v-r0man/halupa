using Microsoft.AspNetCore.Authorization;
using System;
using System.Linq;

namespace Extensions.PolicyProviders
{
    public static class HalupaAuthorizationPolicyFactory
    {
        public static AuthorizationPolicy Create(string policyName)
        {
            var parts = policyName.Split('.');
            var type = parts.First();
            var value = parts.Last();

            switch (type)
            {
                case HalupaPolicies.Rank:
                    return new AuthorizationPolicyBuilder()
                        .RequireClaim("Rank", value)
                        .Build();
                case HalupaPolicies.SecurityLevel:
                    return new AuthorizationPolicyBuilder()
                        .AddRequirements(new HalupaSecurityLevelRequirement(Convert.ToInt32(value)))
                        .Build();
                default:
                    return null;
            }
        }
    }
}
