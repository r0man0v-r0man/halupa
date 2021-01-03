namespace DAL.Entities.Address
{
    public record BoundedBy
    {
        public int Id { get; set; }
        public int EnvelopeId { get; set; }
        public Envelope Envelope { get; set; }
    }
}