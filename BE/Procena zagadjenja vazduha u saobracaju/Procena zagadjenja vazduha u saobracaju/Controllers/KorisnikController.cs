using BusinessLayer;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Procena_zagadjenja_vazduha_u_saobracaju.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KorisnikController : ControllerBase
    {
        private readonly IKorisnikBusiness _korisnikBusiness;
        public KorisnikController(IKorisnikBusiness korisnikBusiness)
        {
            _korisnikBusiness = korisnikBusiness;
        }

        [HttpPost("login")]
        public Korisnik Logon([FromBody] Korisnik korisnik)
        {
            if(korisnik != null)
            {
                return _korisnikBusiness.Login(korisnik);
            }
            return null;
        }
        [HttpPost("insert")]
        public bool DodajKorisnika([FromBody]Korisnik korisnik)
        {
            return _korisnikBusiness.DodajKorisnika(korisnik);
        }
        [HttpDelete("delete/{id}")]
        public bool ObrisiKorisnika(int id)
        {
            return _korisnikBusiness.ObrisiKorisnika(id);
        }

    }
}
