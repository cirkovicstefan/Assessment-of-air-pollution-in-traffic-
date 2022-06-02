using DataLayer.Models;
using System.Collections.Generic;

namespace BusinessLayer
{
    public interface IVremeBusiness
    {
        bool DodajVreme(Vreme vreme);
        bool ObrisiVreme(int Idvremena);
        bool IzmeniVreme(Vreme vreme);
        List<Vreme> SvoVreme();
    }
}
