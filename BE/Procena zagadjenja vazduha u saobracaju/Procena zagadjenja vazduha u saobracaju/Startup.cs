using BusinessLayer;
using DataLayer;
using Microsoft.AspNetCore.Builder;

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


using Newtonsoft.Json.Serialization;


namespace Procena_zagadjenja_vazduha_u_saobracaju
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
           
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(c=>
            {
                c.AddPolicy("AllowOrign", option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });
            services.AddControllers();
            services.AddScoped<IZagadjenjeRepository, ZagadjenjeRepository>();
            services.AddScoped<IVremeRepository, VremeRepository>();
            services.AddScoped<IStanicaRepository, StanicaRepository>();
            services.AddScoped<IStanicaBusiness, StanicaBusiness>();
            services.AddScoped<IVremeBusiness, VremeBusiness>();
            services.AddScoped<IZagadjenjeBusiness, ZagadjenjeBusiness>();
            services.AddScoped<IKorisnikRepository, KorisnikRepository>();
            services.AddScoped<IKorisnikBusiness, KorisnikBusiness>();


            services.AddControllersWithViews().AddNewtonsoftJson(options =>
                  options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                   .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
