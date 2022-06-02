using DataLayer.Models;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace DataLayer
{
    public class VremeRepository : IVremeRepository
    {
        public bool DodajVreme(Vreme vreme)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"INSERT INTO Vreme VALUES('{vreme.Sat}'," +
                    $"'{vreme.Dan}','{vreme.Datum}')";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public bool IzmeniVreme(Vreme vreme)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"UPDATE Vreme SET sat='{vreme.Sat}', dan='{vreme.Dan}'," +
                    $"datum='{vreme.Datum}' WHERE IdVremena='{vreme.IdVremena}'";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public bool ObrisiVreme(int Idvremena)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"DELETE FROM Vreme WHERE IdVremena='{Idvremena}'";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public List<Vreme> SvoVreme()
        {
            List<Vreme> returnLista = new List<Vreme>();
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = "SELECT * FROM Vreme";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                SqlDataReader reader = sqlCommand.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        returnLista.Add(new Vreme
                        {
                            IdVremena = reader.GetInt32(0),
                            Sat = reader.GetString(1),
                            Dan = reader.GetString(2),
                            Datum = reader.GetString(3)
                        });
                    }
                }
            }
            return returnLista;
        }
    }
}
