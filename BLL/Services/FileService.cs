using AutoMapper;
using BLL.DTO;
using BLL.Services.Interfaces;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class FileService : IFileService
    {
        private readonly IFileRepo _fileRepo;
        private readonly IMapper _mapper;
        public FileService(IFileRepo fileRepo, IMapper mapper)
        {
            _fileRepo = fileRepo;
            _mapper = mapper;
        }
        public async Task<Image> UploadAsync(IFormFile image)
        {
            var result = await _fileRepo
                .UploadFilesAsync(image)
                .ConfigureAwait(false);
            return _mapper.Map<Image>(result);
        }

        public async Task<bool> DeleteAsync(string deleteHash) =>
            await _fileRepo
            .DeleteFileAsync(deleteHash)
            .ConfigureAwait(false);
    }
}
