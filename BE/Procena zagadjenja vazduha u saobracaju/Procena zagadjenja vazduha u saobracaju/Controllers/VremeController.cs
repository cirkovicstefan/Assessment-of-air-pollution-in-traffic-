using BusinessLayer;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace Procena_zagadjenja_vazduha_u_saobracaju.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VremeController : ControllerBase
    {
        private readonly IVremeBusiness _vremeBusiness;
        private readonly IConfiguration _configuration;

        public VremeController(IVremeBusiness vremeBusiness, IConfiguration configuration)
        {
            _vremeBusiness = vremeBusiness;
            _configuration = configuration;
        }

        [HttpGet("getAll")]
        public List<Vreme> SvoVreme()
        {
            var _vreme = _vremeBusiness.SvoVreme();
            if (_vreme != null)
            {
                return _vreme;
            }
            return null;
        }
        [HttpPost("insert")]
        public bool DodajVreme([FromBody] Vreme vreme)
        {
            if (vreme == null)
            {
                return false;
            }
            else
            {
                return _vremeBusiness.DodajVreme(vreme);
            }
        }
        [HttpPut("update")]
        public bool IzmeniVreme([FromBody] Vreme vreme)
        {
            if (vreme == null)
            {
                return false;
            }
            else
            {
                return _vremeBusiness.IzmeniVreme(vreme);
            }

        }
        [HttpDelete("delete/{id}")]
        public bool ObrisiVreme(int id)
        {
            try
            {
                return _vremeBusiness.ObrisiVreme(id);
            }
            catch
            {
                return false;
            }
        }
    }
}
