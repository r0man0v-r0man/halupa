using BLL.DTO;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services.Interfaces
{
    public interface IFileService
    {
        Task<ImageDto> UploadAsync(IFormFile image);
        Task<bool> DeleteAsync(string deleteHash);
    }
}
