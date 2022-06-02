using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public interface IStanicaBusiness
    {
        bool DodajStanicu(Stanica stanica);
        bool IzmeniStanicu(Stanica stanica);
        bool ObrisiStanicu(int IdStanice);
        List<Stanica> SveStanice();
    }
}
