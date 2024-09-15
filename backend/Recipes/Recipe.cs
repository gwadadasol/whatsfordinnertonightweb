namespace WhatsForDinnerTonight
{
    public class Recipe
    {
        public required string Name { get; set; }
        // public string Description { get; set; }
        public required IEnumerable<string> Ingredients { get; set; }
        // public string Instructions { get; set; }
    }
}