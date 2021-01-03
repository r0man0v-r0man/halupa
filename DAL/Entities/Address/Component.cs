namespace DAL.Entities.Address
{
    public record Component
    {
        public int Id { get; set; }
        public string Kind { get; set; }
        public string Name { get; set; }
    }
}