import { Component, OnInit } from '@angular/core';

import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: SharedService, private ruter: Router) { }

  username?: string;
  password?: string;
  ListaKorisnika?: any[];
  greska?: boolean;


  ngOnInit(): void {


  }

 
  Prihvati() {

    var val = {
      KorisnickoIme: this.username,
      Lozinka: this.password
    };

    this.service.getLogin(val).subscribe(item => {
      console.log(item);
      if (item != null) {
        this.ruter.navigate(['/admin/zagadjenje']);
      }
      else {
        var greska2 = document.getElementById("greska") as HTMLParagraphElement;
        var greska3 = document.getElementById("korisnickoime") as HTMLInputElement;
        var greska4 = document.getElementById("lozinka") as HTMLInputElement;


        greska2.innerHTML = 'Pogršno korisničko ime i lozinka pokušajte ponovo';
        greska3.style.border = '2px solid red';
        greska4.style.border = '2px solid red';
      }
    });

  }

}
