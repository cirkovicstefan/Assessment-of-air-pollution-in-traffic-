import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  //Metode za zagadjenost vazduha
  getZagadjenosti(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/zagadjenje');
  }

  addZagadjenost(val: any) {
    return this.http.post(this.APIUrl + "/zagadjenje/insert", val);
  }
  updateZagadjenost(val: any) {
    return this.http.put(this.APIUrl + "/zagadjenje/update", val);
  }
  deleteZagadjenost(val: any) {
    return this.http.delete(this.APIUrl + "/zagadjenje/delete/" + val);
  }

  //Metod za vreme
  getVremena(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/vreme/getAll');
  }

  addVreme(val: any) {
    return this.http.post(this.APIUrl + "/vreme/insert", val);
  }
  updateVreme(val: any) {
    return this.http.put(this.APIUrl + "/vreme/update", val);
  }
  deleteVreme(val: any) {
    return this.http.delete(this.APIUrl + "/vreme/delete/" + val);
  }

  //Metod za Stanice
  getStanice(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/stanica/getAll");
  }

  addStanica(val: any) {
    return this.http.post(this.APIUrl + "/stanica/insert", val);
  }
  updateStanica(val: any) {
    return this.http.put(this.APIUrl + "/stanica/update", val);
  }
  deleteStanica(val: any) {
    return this.http.delete(this.APIUrl + "/stanica/delete/" + val);
  }

  getLogin(val: any) {
    return this.http.post<any>(this.APIUrl + "/korisnik/login", val);
  }

}
