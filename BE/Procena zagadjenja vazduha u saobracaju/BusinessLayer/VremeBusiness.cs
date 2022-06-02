using DataLayer;
using DataLayer.Models;
using System.Collections.Generic;

namespace BusinessLayer
{
    public class VremeBusiness : IVremeBusiness
    {
        private readonly IVremeRepository _vremeRepository;

        public VremeBusiness(IVremeRepository vremeRepository)
        {
            _vremeRepository = vremeRepository;
        }

        public bool DodajVreme(Vreme vreme)
        {
            return
            _vremeRepository.DodajVreme(vreme);
        }

        public bool IzmeniVreme(Vreme vreme)
        {
            return _vremeRepository.IzmeniVreme(vreme);
        }

        public bool ObrisiVreme(int Idvremena)
        {
            return _vremeRepository.ObrisiVreme(Idvremena);
        }

        public List<Vreme> SvoVreme()
        {
            return _vremeRepository.SvoVreme();
        }
    }
}
