using DAL.Entities;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DAL.Repo
{
    public class FileRepo : IFileRepo
    {
        private readonly IConfiguration _configuration;
        public FileRepo(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<bool> DeleteFileAsync(string deleteHash)
        {
            if (string.IsNullOrEmpty(deleteHash)) return false;
            try
            {
                return true;
            }
            catch
            {
                throw;
            }
        }

        public async Task<Image> UploadFilesAsync(IFormFile file)
        {
            try
            {
                var name = GetNewFileName(file);
                var uploadPath = SetUploadPath(GetFileUploadPath(), name);
                await using var streamFull = File
                    .Create(uploadPath);
                await file
                    .CopyToAsync(streamFull)
                    .ConfigureAwait(false);
                return new Image
                {
                    FileName = name
                };
            }
            catch
            {
                throw;
            }
        }
        /// <summary>
        /// Установка полного пути для загружаемого файла
        /// </summary>
        /// <param name="imagesPath">Папка</param>
        /// <param name="fileName">Имя файла</param>
        /// <returns></returns>
        private string SetUploadPath(string imagesPath, string fileName) =>
            Path.Combine(imagesPath, fileName);
        /// <summary>
        /// Получить имя файла
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        private string GetNewFileName(IFormFile file) =>
           Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
        /// <summary>
        /// путь для загрузки файлов
        /// </summary>
        /// <returns></returns>
        private string GetFileUploadPath() =>
            _configuration.GetValue<string>("fileUploadPath");
    }
}
