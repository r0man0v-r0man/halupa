using System.Collections.Generic;

namespace Extensions.PolicyProviders
{
    // {type}
    public static class HalupaPolicies
    {
        public static IEnumerable<string> Get()
        {
            yield return SecurityLevel;
            yield return Rank;
        }
        public const string SecurityLevel = "SecurityLevel";
        public const string Rank = "Rank";
    }
}
