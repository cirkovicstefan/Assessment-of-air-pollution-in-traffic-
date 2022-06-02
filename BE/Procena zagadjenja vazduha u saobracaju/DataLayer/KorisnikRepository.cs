using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class KorisnikRepository : IKorisnikRepository
    {
        public bool DodajKorisnika(Korisnik korisnik)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"INSERT INTO Korisnici VALUES('{korisnik.KorisnickoIme}'," +
                    $"'{korisnik.Lozinka}')";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public List<Korisnik> GetKorisniks()
        {
            List<Korisnik> returnKorisnik = new List<Korisnik>();
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = "SELECT * FROM Korisnici";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                SqlDataReader reader = sqlCommand.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        returnKorisnik.Add(new Korisnik
                        {
                            ID = reader.GetInt32(0),
                            KorisnickoIme = reader.GetString(1),
                            Lozinka = reader.GetString(2)
                        

                        });
                    }
                }

            }
            return returnKorisnik;
        }

        public bool ObrisiKorisnika(int id)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"DELETE FROM Korisnici WHERE ID='{id}'";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }
    }
}
