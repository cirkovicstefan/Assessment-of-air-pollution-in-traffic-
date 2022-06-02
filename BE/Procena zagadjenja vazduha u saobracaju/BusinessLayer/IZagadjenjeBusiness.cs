using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public interface IZagadjenjeBusiness
    {
        bool DodajZagadjenje(ZagadjenjeVazduha zagadjenjeVazduha);
        bool ObrisiZagadjenje(int id);
        bool IzmeniZagadjenja(ZagadjenjeVazduha zagadjenjeVazduha);
        public JsonResult SvoZagadjenjeVazduha();
    }
}
