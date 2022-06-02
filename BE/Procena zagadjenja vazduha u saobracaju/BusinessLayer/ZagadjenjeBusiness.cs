using DataLayer;
using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;

namespace BusinessLayer
{
    public class ZagadjenjeBusiness : IZagadjenjeBusiness
    {
        private readonly IZagadjenjeRepository _zagadjenjeRepository;
        public ZagadjenjeBusiness(IZagadjenjeRepository zagadjenjeRepository)
        {
            _zagadjenjeRepository = zagadjenjeRepository;
        }
        public bool DodajZagadjenje(ZagadjenjeVazduha zagadjenjeVazduha)
        {
            return _zagadjenjeRepository.DodajZagadjenje(zagadjenjeVazduha);
        }

        public bool IzmeniZagadjenja(ZagadjenjeVazduha zagadjenjeVazduha)
        {
            return _zagadjenjeRepository.IzmeniZagadjenja(zagadjenjeVazduha);
        }

        public bool ObrisiZagadjenje(int id)
        {
            return _zagadjenjeRepository.ObrisiZagadjenje(id);
        }

        public JsonResult SvoZagadjenjeVazduha()
        {
            return _zagadjenjeRepository.SvoZagadjenjeVazduha();
        }
    }
}
