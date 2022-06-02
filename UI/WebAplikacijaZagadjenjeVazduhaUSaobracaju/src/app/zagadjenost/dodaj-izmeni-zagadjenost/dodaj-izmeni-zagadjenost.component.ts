import { Component, OnInit, Input } from '@angular/core';
import { zip } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-dodaj-izmeni-zagadjenost',
  templateUrl: './dodaj-izmeni-zagadjenost.component.html',
  styleUrls: ['./dodaj-izmeni-zagadjenost.component.css']
})
export class DodajIzmeniZagadjenostComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() zagadjenje: any;

  IdZagadjenja?: any;
  IdStanice?: any;
  IdVremena?: any;
  brojVozila?: any;
 
  StanicaList: any = [];
  VremeList: any = [];

  refreshVreme() {
    this.service.getVremena().subscribe(data => {
      this.VremeList = data;
    });
  }
  refreshStanica() {
    this.service.getStanice().subscribe(data => {
      this.StanicaList = data;
    });
  }

  ngOnInit(): void {
   this.refreshStanica();
    this.refreshVreme();
    this.IdZagadjenja = this.zagadjenje.IdZagadjenja;
    this.IdStanice = this.zagadjenje.IdStanice;
    this.IdVremena = this.zagadjenje.IdVremena;
    this.brojVozila = this.zagadjenje.brojVozila;
    
   

  }

  addZagadjenje() {
    var val = {
      IdZagadjenja: this.IdZagadjenja,
      IdStanice: this.IdStanice,
      IdVremena: this.IdVremena,
      brojVozila: this.brojVozila
  
    };
    this.service.addZagadjenost(val).subscribe(res => {
      alert(res.toString());
    });
  }

  izmeniZagadjenost() {
    var val = {
      IdZagadjenja: this.IdZagadjenja,
      IdStanice: this.IdStanice,
      IdVremena: this.IdVremena,
      brojVozila: this.brojVozila
    
    };
    this.service.updateZagadjenost(val).subscribe(res => {
      alert(res.toString());
    });
  }


}
