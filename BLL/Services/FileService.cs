using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BLL.DTO;
using BLL.Services.Interfaces;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Http;

namespace BLL.Services
{
    public class FileService : IFileService
    {
        private readonly IFileRepo _fileRepo;
        public FileService(IFileRepo fileRepo)
        {
            _fileRepo = fileRepo;
        }
        public async Task<ImageDto> UploadAsync(IFormFile image)
        {
            ImageDto result = await _fileRepo.UploadFileAsync(image).ConfigureAwait(false);
            return result;
        }
    }
}
