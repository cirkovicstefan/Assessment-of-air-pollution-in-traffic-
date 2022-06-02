using DataLayer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;


namespace DataLayer
{
    public class ZagadjenjeRepository : IZagadjenjeRepository
    {
        public bool DodajZagadjenje(ZagadjenjeVazduha zagadjenjeVazduha)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"INSERT INTO Zagadjenje VALUES('{zagadjenjeVazduha.IdStanice}'," +
                    $"'{zagadjenjeVazduha.IdVremena}','{zagadjenjeVazduha.BrojVozila}')";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public bool IzmeniZagadjenja(ZagadjenjeVazduha zagadjenjeVazduha)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"UPDATE Zagadjenje SET IdStanice='{zagadjenjeVazduha.IdStanice}'," +
                    $"IdVremena='{zagadjenjeVazduha.IdVremena}', brojVozila='{zagadjenjeVazduha.BrojVozila}' " +
                    $" WHERE IdZagadjenja='{zagadjenjeVazduha.IdZagadjenja}'";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public bool ObrisiZagadjenje(int id)
        {
            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"DELETE FROM Zagadjenje WHERE IdZagadjenja='{id}'";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                return sqlCommand.ExecuteNonQuery() > 0;
            }
        }

        public JsonResult SvoZagadjenjeVazduha()
        {

            using (SqlConnection sqlConnection = new SqlConnection(DBKonekcija.ConnectionString))
            {
                sqlConnection.Open();
                string query = $"SELECT z.IdZagadjenja,s.IdStanica,s.Region,s.Grad,s.Mesto,z.brojVozila,(z.brojVozila*0.030) AS PM10,(z.brojVozila*0.060) AS NO2,(z.brojVozila*0.005) AS CO, (z.brojVozila*0.050) AS SO2," +
                    $"v.sat,v.dan,v.datum FROM Stanica s INNER JOIN Zagadjenje z ON z.IdStanice=s.IdStanica " +
                    $"INNER JOIN Vreme v ON v.IdVremena=z.Idvremena";
                SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);

                DataTable table = new DataTable();
                SqlDataReader myReader;

                myReader = sqlCommand.ExecuteReader();
                table.Load(myReader);

                return new JsonResult(table);
            }
        }
    }
}
