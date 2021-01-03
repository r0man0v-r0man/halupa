namespace DAL.Entities.Address
{
    public record Envelope
    {
        public int Id { get; set; }
        public string LowerCorner { get; set; }
        public string UpperCorner { get; set; }
    }
}