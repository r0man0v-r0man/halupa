using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace api.Logging
{
    public static class FileLoggerExtensions
    {
        public static ILoggingBuilder AddHalupaFileLogger(this ILoggingBuilder loggingBuilder, Action<FileLoggerOptions> configure)
        {
            loggingBuilder.Services.AddSingleton<ILoggerProvider, FileLoggerProvider>();
            loggingBuilder.Services.Configure(configure);
            return loggingBuilder;
        }
    }
}
