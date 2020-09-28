namespace DAL.Entities
{
    public class Image 
    {
        public int Id { get ; set; }
        public string DeleteHash { get; set; }
        public string Url { get; set; }
        public string Uid { get; set; }
        public long Size { get; set; }
    }
}
