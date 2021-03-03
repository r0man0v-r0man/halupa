using Microsoft.Extensions.Logging;
using System;
using System.IO;

namespace api.Logging
{
    public class FileLogger : ILogger
    {
        public string path { get; set; }
        public FileLogger(string folderPath, string filePath)
        {
            path = Path.Combine(folderPath, filePath.Replace("{date}", DateTime.Now.ToString("yyyyMMdd")));
        }

        public IDisposable BeginScope<TState>(TState state)
        {
            return null;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return logLevel != LogLevel.None;
        }

        public async void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }
            var logRecord = string.Format("{0} {1} {2}",
                "[" + DateTime.Now + "]",
                exception, formatter(state, exception));
            await using var streamWriter = new StreamWriter(path, true);
            streamWriter.WriteLine(logRecord);
        }
    }
}
