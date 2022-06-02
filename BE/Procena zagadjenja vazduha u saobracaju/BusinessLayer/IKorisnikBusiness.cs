using DataLayer.Models;
using System.Collections.Generic;

namespace BusinessLayer
{
    public interface IKorisnikBusiness
    {
        public Korisnik Login(Korisnik korisnik);
        bool DodajKorisnika(Korisnik korisnik);
        bool ObrisiKorisnika(int id);
    }
}
