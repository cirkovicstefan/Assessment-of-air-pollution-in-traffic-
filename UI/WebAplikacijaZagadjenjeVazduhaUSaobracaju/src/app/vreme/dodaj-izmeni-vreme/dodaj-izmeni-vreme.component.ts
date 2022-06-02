import { Component, OnInit, Input } from '@angular/core';
import { zip } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dodaj-izmeni-vreme',
  templateUrl: './dodaj-izmeni-vreme.component.html',
  styleUrls: ['./dodaj-izmeni-vreme.component.css']
})
export class DodajIzmeniVremeComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() vreme: any;
 
  IdVremena: any;
  Sat?: string;
  Dan?: string;
  Datum?: string;

  ListaSati:any=['6:00h','8:00h','10:00h','12:00h','14:00h','16:00h','18:00h','20:00h','22:00h','24:00h'];
  ListaDana:any=["Pondeljak","Utorak","Sreda","Četvrtak","Petak","Subota","Nedelja"];

  ngOnInit(): void {
    this.IdVremena = this.vreme.IdVremena;
    this.Sat = this.vreme.Sat;
    this.Dan = this.vreme.Dan;
    this.Datum = this.vreme.Datum;
  }
  addVremena() {
    var val = {
      IdVremena: this.IdVremena,
      Sat: this.Sat,
      Dan: this.Dan,
      Datum: this.Datum
    };
    this.service.addVreme(val).subscribe(res => {
      alert(res.toString());
    });
  }
  izmeniVreme() {
    var val = {
      IdVremena: this.IdVremena,
      Sat: this.Sat,
      Dan: this.Dan,
      Datum: this.Datum
    };
    this.service.updateVreme(val).subscribe(res => {
      alert(res.toString());
    });
  }


}
