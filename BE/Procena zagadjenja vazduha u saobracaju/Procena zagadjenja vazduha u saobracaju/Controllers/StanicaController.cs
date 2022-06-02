using BusinessLayer;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace Procena_zagadjenja_vazduha_u_saobracaju.Controllers
{
    [Route("api/[controller]")]
    public class StanicaController : ControllerBase
    {

        private readonly IStanicaBusiness _stanicaBusiness;
        private readonly IConfiguration _configuration;
        public StanicaController(IConfiguration configuration, IStanicaBusiness stanicaBusiness)
        {
            _configuration = configuration;
            _stanicaBusiness = stanicaBusiness;
        }

        [HttpPost("insert")]
        public bool DodajStanicu([FromBody] Stanica stanica)
        {
            if (stanica == null)
            {
                return false;
            }
            else
            {
                return _stanicaBusiness.DodajStanicu(stanica);
                
                 
            }
        }
        [HttpGet("getAll")]
        public List<Stanica> SveStanice()
        {
            var stanice = _stanicaBusiness.SveStanice();
            if (stanice != null)
            {
                return stanice;
            }
            return null;

        }
        [HttpPut("update")]
        public bool IzmeniStanicu([FromBody] Stanica stanica)
        {
            if (stanica == null)
                return false;
            else
            {
                return _stanicaBusiness.IzmeniStanicu(stanica);
               
            }
        }
        [HttpDelete("delete/{id}")]
        public bool ObrisiStanicu(int id)
        {
            try
            {
               return _stanicaBusiness.ObrisiStanicu(id);
                
                   
            }
            catch
            {
                return false;
            }

        }
    }
}
