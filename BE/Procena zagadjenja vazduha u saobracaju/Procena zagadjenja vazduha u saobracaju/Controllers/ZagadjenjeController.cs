using BusinessLayer;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace Procena_zagadjenja_vazduha_u_saobracaju.Controllers
{
    [Route("api/[controller]")] // prefiks putanje za ceo kontroler (sve metode), gde je [controller] tzv. Route token, koji uzima za vrednost naziv klase gde je ruta definisana
    [ApiController]
    public class ZagadjenjeController : ControllerBase
    {
        private readonly IZagadjenjeBusiness _zagadjenjeBusiness;
        private readonly IConfiguration _configuration;

        public ZagadjenjeController(IConfiguration configuration,IZagadjenjeBusiness zagadjenjeBusiness)
        {
            _configuration = configuration;
            _zagadjenjeBusiness = zagadjenjeBusiness;
        }

        [HttpGet]
        public JsonResult SvoZagadjenje()
        {
            var result = _zagadjenjeBusiness.SvoZagadjenjeVazduha();
            if (result != null)
            {
                return result;
            }
            return null;
        }

        [HttpPost("insert")]
        public bool DodajZagadjenje([FromBody] ZagadjenjeVazduha zagadjenjeVazduha)
        {
            try
            {
                if (zagadjenjeVazduha == null)
                    return false;
                else if (zagadjenjeVazduha.IdStanice == 0 && zagadjenjeVazduha.IdVremena == 0)
                    return false;
                else
                {
                    bool rez = _zagadjenjeBusiness.DodajZagadjenje(zagadjenjeVazduha);

                    if (rez == true)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }

                }
            }
            catch
            {
                return false;
            }

        }

        [HttpDelete("delete/{id}")]
        public bool ObrsiZagadjenost(int id)
        {

            bool res = _zagadjenjeBusiness.ObrisiZagadjenje(id);
            if (res == true)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        [HttpPut("update")]
        public bool zmeniZagadjenje([FromBody] ZagadjenjeVazduha zagadjenjeVazduha)
        {
            bool result = _zagadjenjeBusiness.IzmeniZagadjenja(zagadjenjeVazduha);
            if (result == true)
            {
                return result;
            }
            return false;
        }
    }
}
