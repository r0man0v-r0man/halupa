using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using DAL.Repo.Interfaces;
using Imgur.API;
using Imgur.API.Endpoints;
using Imgur.API.Models;
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
            catch (ImgurException e)
            {
                throw;
            }
        }

        public async Task<IImage> UploadFileAsync(IFormFile file)
        {
            try
            {
                return await _imageEndpoint.UploadImageAsync(file?.OpenReadStream()).ConfigureAwait(false);
            }
            catch (ImgurException e)
            {
                throw;
            }
        }
    }
}
