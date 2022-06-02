import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-prikaz-zagadjenosti',
  templateUrl: './prikaz-zagadjenosti.component.html',
  styleUrls: ['./prikaz-zagadjenosti.component.css']
})
export class PrikazZagadjenostiComponent implements OnInit {

  constructor(private service: SharedService) { }
  ModalTitle?: string;
  ActivateDodajIzmeniZagadjenjeKomp?: boolean;
  zagadjenje?: any;

  ZagadjenjeList: any = [];


  ngOnInit(): void {
    this.refreshZagadjenja();
  }

  addClick() {
    this.zagadjenje = {
      IdZagadjenja: 0,
      IdStanice:0,
      IdVremena: 0,
      brojVozila: 0
    }
    this.ModalTitle = "Dodaj zagadjenje";
    this.ActivateDodajIzmeniZagadjenjeKomp = true;

  }
  closeClick() {
    this.ActivateDodajIzmeniZagadjenjeKomp = false;
    this.refreshZagadjenja();
  }

  addEdit(item: any) {
    this.zagadjenje = item;
    this.ModalTitle = "Izmeni zagadjenje";
    this.ActivateDodajIzmeniZagadjenjeKomp = true;
  }

  deleteClick(item: any) {
    if (confirm('Da li ste sigurni')) {
      this.service.deleteZagadjenost(item.IdZagadjenja).subscribe(res => {
        alert(res.toString());
        this.refreshZagadjenja();
      });
    }
  }

  refreshZagadjenja() {
    this.service.getZagadjenosti().subscribe(data => {
      this.ZagadjenjeList = data;
    });
  }

}
