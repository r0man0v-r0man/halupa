using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.PolicyProviders
{
    public class HalupaSecurityLevelHandler : AuthorizationHandler<HalupaSecurityLevelRequirement>
    {
        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context,
            HalupaSecurityLevelRequirement requirement)
        {
            var claimValue = Convert.ToInt32(context
                .User
                .Claims
                .FirstOrDefault(x => x.Type == HalupaPolicies.SecurityLevel)?.Value ?? "0");
            if (requirement.Level <= claimValue)
            {
                context.Succeed(requirement);
            }
            return Task.CompletedTask;
        }
    }
}
