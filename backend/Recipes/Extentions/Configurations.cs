public static class Configurations
{
 public static void RegisterServices(this WebApplicationBuilder builder)
 {
     builder.Services
     .AddEndpointsApiExplorer()
     .AddSwaggerGen();
     builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAllOrigins",
            builder => builder.AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod());
    });
 }

 public static void RegisterMiddlewares(this WebApplication app)
 {
     if (app.Environment.IsDevelopment())
     {
         app.UseSwagger();
         app.UseSwaggerUI();
     }
     

    //  app.UseHttpsRedirection();
 }
 
}