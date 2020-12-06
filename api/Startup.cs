using BLL;
using DAL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace api
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApiServices(Configuration);
            services.AddBllServices();
            services.AddDalServices(Configuration);
        }

        public void Configure(
            IApplicationBuilder app, 
            IWebHostEnvironment env)
        {
            app.UseForwardedHeaders();

            if (env.IsDevelopment()) { 
                app.UseDeveloperExceptionPage();
                app.UseCors(options => {
                    options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            }
            if (!env.IsDevelopment())
            {
                app.UseCors(options => {
                    options.WithOrigins("https://halupa.by").AllowAnyHeader().AllowAnyMethod();
                });
            }
            app.UseRouting();

            //who are you?
            app.UseAuthentication();

            //are you allowed?
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
