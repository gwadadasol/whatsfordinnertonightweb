using System.Text.Json;
using WhatsForDinnerTonight;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.RegisterServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.RegisterMiddlewares();

var loggerFactory = app.Services.GetRequiredService<ILoggerFactory>();
ILogger logger = loggerFactory.CreateLogger("MyApp");

app.UseRouting();
app.UseEndpoints(endpoints => 
{
    endpoints.RegisterRecipesEndpoints();
});

app.Run();