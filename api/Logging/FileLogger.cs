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

        public IDisposable BeginScope<TState>(TState state) => null;

        public bool IsEnabled(LogLevel logLevel) => logLevel != LogLevel.None;

        public async void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }
            if(exception != null)
            {
                var logRecord = string.Format("{0} {1} {2} {3} {4}",
                "[" + DateTime.Now + "]", "[" + logLevel.ToString() + "]",
                exception, formatter(state, exception), exception.StackTrace);
                await File.AppendAllTextAsync(path, logRecord + Environment.NewLine);
            }
        }
    }
}
