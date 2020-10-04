using System.Threading.Tasks;
using DAL.Entities;
using Microsoft.AspNetCore.Http;

namespace DAL.Repo.Interfaces
{
    public interface IFileRepo
    {
        Task<bool> DeleteFileAsync(string deleteHash);
        Task<Image> UploadFileAsync(IFormFile file);
    }
}
