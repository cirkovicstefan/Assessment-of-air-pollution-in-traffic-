import { Component, OnInit, Input } from '@angular/core';
import { zip } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-dodaj-izmeni-stanica',
  templateUrl: './dodaj-izmeni-stanica.component.html',
  styleUrls: ['./dodaj-izmeni-stanica.component.css']
})
export class DodajIzmeniStanicaComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() stanica: any;

  IdStanice: any;
  Region?: string;
  Grad?: string;
  Mesto?: string;

  ngOnInit(): void {
    this.IdStanice = this.stanica.IdStanice;
    this.Region = this.stanica.Region;
    this.Grad = this.stanica.Grad;
    this.Mesto = this.stanica.Mesto;

  }
  addStanica() {
    var val = {
      IdStanice: this.IdStanice,
      Region: this.Region,
      Grad: this.Grad,
      Mesto: this.Mesto
    };
    this.service.addStanica(val).subscribe(res => {
      alert(res.toString());
    });
  }
  izmeniStanica() {
    var val = {
      IdStanice: this.IdStanice,
      Region: this.Region,
      Grad: this.Grad,
      Mesto: this.Mesto
    };
    this.service.updateStanica(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
