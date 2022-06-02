using DataLayer;
using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
   public  class KorisnikBusiness:IKorisnikBusiness
    {
        private readonly IKorisnikRepository _korisnikRepository;
        public KorisnikBusiness(IKorisnikRepository korisnikRepository)
        {
            _korisnikRepository = korisnikRepository;
        }

        public bool DodajKorisnika(Korisnik korisnik)
        {
            return _korisnikRepository.DodajKorisnika(korisnik) == true;
        }
       
   
        public Korisnik Login(Korisnik korisnik)
        {

            Korisnik temp = null;
            foreach(var item in _korisnikRepository.GetKorisniks())
            {
                if(korisnik.Lozinka==item.Lozinka && korisnik.KorisnickoIme == item.KorisnickoIme)
                {
                    temp = korisnik;
                    break;
                }
            }
            return temp;
        }

        public bool ObrisiKorisnika(int id)
        {
            return _korisnikRepository.ObrisiKorisnika(id);
        }
    }

}
