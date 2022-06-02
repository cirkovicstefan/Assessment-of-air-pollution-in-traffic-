using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public interface IVremeRepository
    {
        bool DodajVreme(Vreme vreme);
        bool ObrisiVreme(int Idvremena);
        bool IzmeniVreme(Vreme vreme);
        List<Vreme> SvoVreme();
    }
}
