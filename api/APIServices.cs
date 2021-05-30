using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.HttpOverrides;
using Extensions.PolicyProviders;

namespace api
{
    public static class APIServices
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IAuthorizationPolicyProvider, HalupaAuthorizationPolicyProvider>();
            services.AddScoped<IAuthorizationHandler, HalupaSecurityLevelHandler>();
            services.AddAuthorization(options =>
            {
                options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
                .RequireAuthenticatedUser()
                .Build();
            });
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            })
                .AddJwtBearer(config =>
                {
                    config.Authority = "https://localhost:44328/";
                    config.Audience = "HalupaApi";
                    //var secretsBytes = Encoding.UTF8.GetBytes(configuration["TokenSecret"]);
                    //var key = new SymmetricSecurityKey(secretsBytes);

                    //config.Events = new JwtBearerEvents()
                    //{
                    //    OnMessageReceived = context =>
                    //    {//for using token via query string parameters
                    //        if (context.Request.Query.ContainsKey("access_token"))
                    //        {
                    //            context.Token = context.Request.Query["access_token"];
                    //        }
                    //        return Task.CompletedTask;
                    //    }
                    //};

                    //config.TokenValidationParameters = new TokenValidationParameters()
                    //{
                    //    ClockSkew = TimeSpan.FromMinutes(10),
                    //    ValidIssuer = configuration["TokenIssuer"],
                    //    ValidAudience = configuration["TokenAudience"],
                    //    IssuerSigningKey = key,
                    //    NameClaimType = JwtRegisteredClaimNames.UniqueName
                    //};
                });
            services.AddCors();
            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders =
                    ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
            });
            services.AddControllers().AddNewtonsoftJson();
            
            return services;
        }
    }
}
