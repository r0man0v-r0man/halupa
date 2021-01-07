using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using BLL.Services.Interfaces;
using DAL.Repo.Interfaces;
using Microsoft.AspNetCore.Http;

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
        public async Task<UploadImage> UploadAsync(IFormFileCollection images)
        {
            var result = await _fileRepo
                .UploadFilesAsync(images)
                .ConfigureAwait(false);

            return _mapper.Map<UploadImage>(result);
        }

        public async Task<bool> DeleteAsync(string deleteHash) => 
            await _fileRepo
            .DeleteFileAsync(deleteHash)
            .ConfigureAwait(false);
    }
}
