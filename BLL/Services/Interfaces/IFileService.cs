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
        Task<UploadImage> UploadAsync(IFormFileCollection images);
        Task<bool> DeleteAsync(string deleteHash);
    }
}
