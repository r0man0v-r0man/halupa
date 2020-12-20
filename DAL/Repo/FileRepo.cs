using System.Threading.Tasks;
using DAL.Entities;
using DAL.Repo.Interfaces;
using Imgur.API;
using Imgur.API.Endpoints;
using Microsoft.AspNetCore.Http;

namespace DAL.Repo
{
    public class FileRepo : IFileRepo
    {
        private readonly IImageEndpoint _imageEndpoint;
        public FileRepo(IImageEndpoint imageEndpoint)
        {
            _imageEndpoint = imageEndpoint;
        }
        public async Task<bool> DeleteFileAsync(string deleteHash)
        {
            if (string.IsNullOrEmpty(deleteHash)) return false;
            try
            {
                return await _imageEndpoint.DeleteImageAsync(deleteHash).ConfigureAwait(false);
            }
            catch (ImgurException)
            {
                throw;
            }
        }

        public async Task<Image> UploadFileAsync(IFormFile file)
        {
            try
            {
                var result = await _imageEndpoint
                    .UploadImageAsync(file?.OpenReadStream())
                    .ConfigureAwait(false);
                return new Image
                {
                    DeleteHash = result.DeleteHash,
                    Id = result.Id,
                    Size = result.Size,
                    Uid = result.Link,
                    Url = result.Link
                };
            }
            catch (ImgurException)
            {
                throw;
            }
        }
    }
}
