using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Imgur.API.Models;
using Microsoft.AspNetCore.Http;

namespace DAL.Repo.Interfaces
{
    public interface IFileRepo
    {
        Task<bool> DeleteFileAsync(string deleteHash);
        Task<IImage> UploadFileAsync(IFormFile file);
    }
}
