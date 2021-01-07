namespace DAL.Entities
{
    /// <summary>
    /// nginx настроен на изменение разрешения img/*ширина*/example.jpg
    /// </summary>
    public class UploadImage
    {
        public int Id { get; set; }
        /// <summary>
        /// 60px
        /// </summary>
        public string Icon { get; set; }
        /// <summary>
        /// 250px
        /// </summary>
        public string Small { get; set; }
        /// <summary>
        /// 600px
        /// </summary>
        public string Middle { get; set; }
        /// <summary>
        /// 1000px
        /// </summary>
        public string Full { get; set; }
        public int AdvertId { get; set; }
        public Advert Advert { get; set; }
    }
}
