using DataLayer.Models;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace DataLayer
{
    public class StanicaRepository : IStanicaRepository
    {
        public bool DodajStanicu(Stanica stanica)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"INSERT INTO Stanica VALUES('{stanica.Region}'," +
                    $"'{stanica.Grad}','{stanica.Mesto}')";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public bool IzmeniStanicu(Stanica stanica)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"UPDATE Stanica SET Region='{stanica.Region}', Grad='{stanica.Grad}'," +
                    $"Mesto='{stanica.Mesto}' WHERE IdStanica='{stanica.IdStanice}'";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public bool ObrisiStanicu(int IdStanice)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"DELETE FROM Stanica WHERE IdStanica='{IdStanice}'";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public List<Stanica> SveStanice()
        {
            List<Stanica> returnStanica = new List<Stanica>();
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = "SELECT * FROM Stanica";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                SqlDataReader reader = sqlCommand.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        returnStanica.Add(new Stanica
                        {
                            IdStanice = reader.GetInt32(0),
                            Region = reader.GetString(1),
                            Grad = reader.GetString(2),
                            Mesto = reader.GetString(3)

                        });
                    }
                }

            }
            return returnStanica;
        }
    }
}
