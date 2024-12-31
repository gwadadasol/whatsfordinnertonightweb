using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;


namespace WhatsForDinnerTonight{
public static class Recipes
{
    static List<Recipe> recipes = new List<Recipe>
    {
        new Recipe
        {
            Name = "Spaghetti Bolognese",
            Ingredients = new List<string> { "spaghetti", "ground beef", "tomato sauce", "garlic", "onion" },
        },
        new Recipe
        {
            Name = "Chicken Curry",
            Ingredients = new List<string> { "chicken", "curry powder", "coconut milk", "onions", "garlic" },
        },
        new Recipe
        {
            Name = "Grilled Salmon",
            Ingredients = new List<string> { "salmon", "lemon", "garlic", "herbs" },
        },
        new Recipe
        {
            Name = "Veggie Stir-Fry",
            Ingredients = new List<string> { "mixed vegetables", "soy sauce", "ginger", "garlic" },
        },
        new Recipe
        {   
            Name = "Tacos",
            Ingredients = new List<string> { "tortillas", "ground beef", "lettuce", "cheese", "tomatoes" },
        },
    }; 

    public static void RegisterRecipesEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGet("/recipes", GetRecipes)
        .WithName("GetAllRecipes")
        .WithOpenApi();

        endpoints.MapGet("/recipes/{ingredient}", GetRecipeByIngredient)
        .WithName("GetRecipesByIngredient")
        .WithOpenApi();
    }

    private static IEnumerable<Recipe> GetRecipes(HttpContext context)
    {
        // Logic to get all recipes
        // await context.Response.WriteAsync("Get all recipes");
        Console.WriteLine("GET /recipes");
        string jsonString = JsonSerializer.Serialize(recipes);
        return recipes;
    }

    private static IEnumerable<Recipe> GetRecipeByIngredient(HttpContext context)
    {
        string? specialIngredient = context.Request.RouteValues["ingredient"]?.ToString();
        // await context.Response.WriteAsync($"Get recipe with ingredient: {ingredient}");

        if (specialIngredient is null)
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            return new List<Recipe>();
        }
        var matchingRecipes = recipes.Where(recipe => recipe.Ingredients.Any(ingredient => string.Equals(ingredient, specialIngredient, StringComparison.OrdinalIgnoreCase))).ToList();
        string jsonString = JsonSerializer.Serialize(matchingRecipes);
        // logger.LogDebug(jsonString);
        return matchingRecipes;
    }

    private static async Task AddRecipe(HttpContext context)
    {
        // Logic to add a new recipe
        await context.Response.WriteAsync("Add new recipe");
    }

    private static async Task UpdateRecipe(HttpContext context)
    {
        // Logic to update a recipe by ID
        var id = context.Request.RouteValues["id"];
        await context.Response.WriteAsync($"Update recipe with ID: {id}");
    }

    private static async Task DeleteRecipe(HttpContext context)
    {
        // Logic to delete a recipe by ID
        var id = context.Request.RouteValues["id"];
        await context.Response.WriteAsync($"Delete recipe with ID: {id}");
    }
}
}
