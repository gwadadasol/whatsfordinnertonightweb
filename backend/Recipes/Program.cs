using System.Text.Json;

using WhatsForDinnerTonight;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAllOrigins",
            builder => builder.AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod());
    });


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
    app.UseCors("AllowAllOrigins");

//app.UseHttpsRedirection();
var loggerFactory = app.Services.GetRequiredService<ILoggerFactory>();
ILogger logger = loggerFactory.CreateLogger("MyApp");

var  recipes = new List<Recipe>
  { 
    new Recipe
        {  
            Name = "Spaghetti Bolognese",
            Ingredients = new List<string> { "Spaghetti" , "ground beef", "tomato sauce", "garlic", "onion" },
        },
    new Recipe
        {  
            Name = "Chicken Curry",
            Ingredients = new List<string> { "Chicken", "curry powder", "coconut milk", "onions", "garlic" },
        },
    new Recipe
        {  
            Name = "Grilled Salmon",
            Ingredients = new List<string> { "Salmon", "lemon", "garlic", "herbs" },
        },
    new Recipe
        {  
            Name = "Veggie Stir-Fry",
            Ingredients = new List<string> { "Mixed vegetables", "soy sauce", "ginger", "garlic" },
        },
    new Recipe
        {  
            Name = "Tacos",
            Ingredients = new List<string> { "Tortillas", "ground beef", "lettuce", "cheese", "tomatoes" },
        },
  };

app.MapGet("/recipes", () =>
{
    Console.WriteLine("GET /recipes");
    string jsonString = JsonSerializer.Serialize(recipes);
    // Console.WriteLine(jsonString);
     logger.LogDebug(jsonString);
    return recipes;
})
.WithName("GetAllRecipes")
.WithOpenApi(); 

app.MapGet("/recipes/{ingredient}", (string ingredient) =>
{
    IEnumerable<Recipe> filteredRecipes =  recipes.Where(r => r.Ingredients.Contains(ingredient, StringComparer.OrdinalIgnoreCase)).ToList();
    string jsonString = JsonSerializer.Serialize(filteredRecipes);
    logger.LogDebug(jsonString);
    return filteredRecipes;
})
.WithName("GetRecipesWithIngredient")
.WithOpenApi();

app.Run();
