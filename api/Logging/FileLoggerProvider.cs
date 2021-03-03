using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.IO;

namespace api.Logging
{
    [ProviderAlias("FileLogging")]
    public class FileLoggerProvider : ILoggerProvider
    {
        public readonly FileLoggerOptions _options;

        public FileLoggerProvider(IOptions<FileLoggerOptions> options)
        {
            _options = options.Value;
            if (!Directory.Exists(_options.FolderPath))
            {
                Directory.CreateDirectory(_options.FolderPath);
            }
        }

        public ILogger CreateLogger(string categoryName) => new FileLogger(_options.FolderPath, _options.FilePath);
        
        public void Dispose()
        {
        }
    }
}
