using DataLayer;
using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public class StanicaBusiness : IStanicaBusiness
    {
        private readonly IStanicaRepository _stanicaRepository;

        public StanicaBusiness(IStanicaRepository stanicaRepository)
        {
            _stanicaRepository = stanicaRepository;
        }

        public bool DodajStanicu(Stanica stanica)
        {
            return _stanicaRepository.DodajStanicu(stanica);
        }

        public bool IzmeniStanicu(Stanica stanica)
        {
            return _stanicaRepository.IzmeniStanicu(stanica);
        }

        public bool ObrisiStanicu(int IdStanice)
        {
            return _stanicaRepository.ObrisiStanicu(IdStanice);
        }

        public List<Stanica> SveStanice()
        {
            return _stanicaRepository.SveStanice();
        }
    }
}
