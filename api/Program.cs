using api.Logging;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder
                        .UseUrls("http://*:5000")
                        .UseStartup<Startup>();
                })
                .ConfigureLogging((context, logging) =>
                {
                    logging.AddHalupaFileLogger(options =>
                    {
                        context.Configuration
                            .GetSection("Logging")
                            .GetSection("FileLogging")
                            .GetSection("Options")
                            .Bind(options);
                    });
                });
    }
}
