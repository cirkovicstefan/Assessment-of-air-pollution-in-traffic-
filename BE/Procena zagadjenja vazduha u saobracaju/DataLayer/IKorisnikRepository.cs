using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public interface IKorisnikRepository
    {
        public List<Korisnik> GetKorisniks();
        bool DodajKorisnika(Korisnik korisnik);
        bool ObrisiKorisnika(int id);
    }
}
