using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.PolicyProviders
{
    public class HalupaAuthorizationPolicyProvider
        : DefaultAuthorizationPolicyProvider
    {
        public HalupaAuthorizationPolicyProvider(IOptions<AuthorizationOptions> options)
            : base(options)
        {

        }
        // {type}.{value}
        public override Task<AuthorizationPolicy> GetPolicyAsync(string policyName)
        {
            foreach (var halupaPolicy in HalupaPolicies.Get())
            {
                if (policyName.StartsWith(halupaPolicy))
                {
                    var policy = HalupaAuthorizationPolicyFactory.Create(policyName);

                    return Task.FromResult(policy);
                }
            }
            return base.GetPolicyAsync(policyName);
        }
    }
}
