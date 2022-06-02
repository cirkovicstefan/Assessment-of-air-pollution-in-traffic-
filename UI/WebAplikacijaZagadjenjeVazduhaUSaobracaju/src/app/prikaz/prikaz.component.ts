import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ListFormat } from 'typescript';

import { SharedService } from '../shared.service';


@Component({
  selector: 'app-prikaz',
  templateUrl: './prikaz.component.html',
  styleUrls: ['./prikaz.component.css']
})

export class PrikazComponent implements OnInit {

  constructor(private shared: HttpClient, private service: SharedService) { }

  IdStanice?: any;
  urlImage?: string;
  Region?: string;
  ZagadjenostList?: any[];
  StanicaList: any = [];
  filterTerm!: string;
  Primer?: any[];
  name?: string;
  x?: any[];
  brojVozila?: any;
  NajnoviDatum?: any;

  DatumR?: string;
  DatumPraviFormat?: string;
  SatR?: string;
  DanR?: string;
  PM10?: string;
  NO2?: string;
  CO?: string;
  SO2?: string;

  DatumMax?: string;
  DatumPraviFormatMax?: string;
  SatRMax?: string;
  DanRMax?: string;
  PM10Max?: string;
  NO2Max?: string;
  COMax?: string;
  SO2Max?: string;


  MaxDatum?: any;

  async Pretraga() {



    this.x = await this.ZagadjenostList?.filter(t => t.IdStanica == this.IdStanice);

    await this.najnoviDatum(this.x);
    this.maxDatum();
    if (typeof (this.NajnoviDatum) !== 'undefined') {
      this.DatumR = this.NajnoviDatum.datum;
      this.DanR = this.NajnoviDatum.dan;
      this.SatR = this.NajnoviDatum.sat;
      this.PM10 = this.NajnoviDatum.PM10;
      this.CO = this.NajnoviDatum.CO;
      this.SO2 = this.NajnoviDatum.SO2;
      this.NO2 = this.NajnoviDatum.NO2;
      this.brojVozila = this.NajnoviDatum.brojVozila;
      let parsedDate = moment(this.DatumR, "YYYY-MM-DD");
      this.DatumPraviFormat = parsedDate.format("DD.MM.YYYY");
      console.log(this.DatumPraviFormat);

    }
    if (typeof (this.MaxDatum) !== 'undefined') {

      this.DanRMax = this.MaxDatum.dan;
      this.SatRMax = this.MaxDatum.sat;
      this.NO2Max = this.MaxDatum.NO2;
      this.SO2Max = this.MaxDatum.SO2;
      this.COMax = this.MaxDatum.CO;
      this.PM10Max = this.MaxDatum.PM10;


    }

    console.log(this.DatumR);
    console.log(this.SatR);
    console.log(this.DanR);
    console.log(this.SO2);
    console.log(this.CO);
    console.log("Prikaz max datuma");

    console.log(this.SatRMax);
    console.log(this.DanRMax);
    console.log(this.SO2Max);
    console.log(this.COMax);


    await this.farbanje();
    this.grafik();
    this.prosek6 = 0;
    this.prosek8 = 0;
    this.prosek10 = 0; this.prosek12 = 0; this.prosek14 = 0;
    this.prosek16 = 0;
    this.prosek18 = 0;
    this.prosek20 = 0;
    this.prosek22 = 0;
    this.prosek24 = 0;
    this.NajnoviDatum = null;
    this.MaxDatum = null;
  }



  async UcitajStanice() {
    this.service.getStanice().subscribe(data => {
      this.StanicaList = data;
    });
  }


  async UcitajZagadjenje() {
    this.service.getZagadjenosti().subscribe(data => {

      this.ZagadjenostList = data;

    });
  }


  maxDatum() {
    this.x?.forEach(item => {
      var current = item;
      if (this.MaxDatum == null || (current.datum > this.MaxDatum.datum)) {
        this.MaxDatum = current;
      }
    });
  }

  async najnoviDatum(x?: any[]) {

    x?.forEach(item => {
      var current = item;
      if (this.NajnoviDatum == null || (current.datum > this.NajnoviDatum.datum)) {
        this.NajnoviDatum = current;
      }
    });

    x?.forEach(item => {
      if (this.NajnoviDatum.datum == item.datum) {
        var current = item;
        if (current.sat > this.NajnoviDatum.sat) {
          this.NajnoviDatum = current;
        }
      }
    });
    if (typeof (this.NajnoviDatum) !== 'undefined') {
      console.log(this.NajnoviDatum.sat);
    }
  }

  chartOptions?: any;
  chartLabels?: any;
  chartLegend?: any;
  chartPlugins?: any;
  chartData?: any;

  prosek6?: number;
  prosek8?: number;
  prosek10?: number;
  prosek12?: number;
  prosek14?: number;
  prosek16?: number;
  prosek18?: number;
  prosek20?: number;
  prosek22?: number;
  prosek24?: number;
  grafik() {
    this.x?.forEach(i => {
      if (this.DatumR == i.datum) {

        console.log("Prikaz grafika");
        console.log(i.SO2);
        console.log(i.sat);
        this.chartOptions = {
          responsive: true,
        };
        var Sat14 =
          this.chartLabels = ['6:00h', '8:00h', '10:00h', '12:00h', '14:00h', '16:00h', '18:00h', '20:00h', '22:00h', '24:00h'];
        this.chartLegend = true;
        this.chartPlugins = [];


        if (i.sat == '6:00h') {
          this.prosek6 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek6);

        }
        if (i.sat == '8:00h') {
          this.prosek8 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek8);

        }

        if (i.sat == '10:00h') {
          this.prosek10 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek10);
        }


        if (i.sat == '12:00h') {
          this.prosek12 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek12);
        }

        if (i.sat == '14:00h') {
          this.prosek14 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek14);
        }
        if (i.sat == '16:00h') {
          this.prosek16 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek16);
        }
        if (i.sat == '18:00h') {
          this.prosek18 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek18);
        }
        if (i.sat == '20:00h') {
          this.prosek20 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek20);
        }
        if (i.sat == '22:00h') {
          this.prosek22 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek22);

        }
        if (i.sat == '24:00h') {
          this.prosek24 = (i.SO2 + i.NO2 + i.PM10 + i.CO) / 8;
          console.log("Prosek je: " + this.prosek24);
        }

        console.log('Prosek za 22');


        this.chartData = [{
          data: [this.prosek6, this.prosek8, this.prosek10, this.prosek12, this.prosek14,
          this.prosek16,
          this.prosek18, this.prosek20, this.prosek22, this.prosek24], label: 'Zagađenje'
        }];



     

      }
    });
  }

  async farbanje() {

    const maskotaOdlican = '../assets/img/odlican.png';
    const maskotaDobarKvalitet = '../assets/img/dobar.png';
    const maskotaPrihvatljivKvalitet = '../assets/img/prihvatljiv.png';
    const maskotaZagadjen = '../assets/img/zagadjen.png';
    const maskotaJankoZagadjen = '../assets/img/jakozagadjen.png';
    var header = document.getElementById("header") as HTMLElement;
    var slika = document.getElementById("maskota") as HTMLImageElement;
    const kartica = document.getElementById("kartica") as HTMLDivElement;
    const stanica = document.getElementById("stanica") as HTMLOptionElement;

    slika.src = '../assets/img/odlican.png';

    this.x?.forEach(i => {
      if (this.DatumR == i.datum) {
        var prosek = (this.NajnoviDatum.NO2 + this.NajnoviDatum.CO + this.NajnoviDatum.PM10 + this.NajnoviDatum.SO2) / 4;
        console.log('Prosek');
        console.log(prosek);
        if ((prosek >= 0 && prosek <= 32) && this.DatumR == i.datum) {
          // header.style.background = 'red';

          header.innerHTML = 'KVALITET VAZDUHA NA TERITORIJI ' + i.Grad.toUpperCase() + ' JE ODLIČAN!';
          header.style.color = '#8fc74a';
          slika.src = maskotaOdlican;
          kartica.style.backgroundColor = '#8fc74a';
          stanica.style.border = '3px solid #8fc74a';

        }


        else if ((prosek > 32 && prosek <= 64) && this.DatumR == i.datum) {
          header.innerHTML = 'KVALITET VAZDUHA NA TERITORIJI ' + i.Grad.toUpperCase() + ' JE DOBAR!';
          slika.src = maskotaDobarKvalitet;
          header.style.color = ' #fff212';
          kartica.style.backgroundColor = '#fff212';
          stanica.style.border = '3px solid #fff212';

        }


        else if ((prosek > 64 && prosek <= 128) && this.DatumR == i.datum) {
          header.innerHTML = 'KVALITET VAZDUHA NA TERITORIJI ' + i.Grad.toUpperCase() + ' JE PRIHVATLJIV!';
          slika.src = maskotaPrihvatljivKvalitet;
          header.style.color = '#f79633';
          kartica.style.backgroundColor = '#f79633';
          stanica.style.border = '3px solid #f79633';

        }

        else if ((prosek > 128 && prosek < 256) && this.DatumR == i.datum) {
          header.innerHTML = 'KVALITET VAZDUHA NA TERITORIJI ' + i.Grad.toUpperCase() + ' JE ZAGAĐEN!';
          slika.src = maskotaZagadjen;
          header.style.color = '#ed3237';
          kartica.style.backgroundColor = '#ed3237';

          stanica.style.border = '3px solid #ed3237';

        }
        else {
          header.innerHTML = 'KVALITET VAZDUHA NA TERITORIJI ' + i.Grad.toUpperCase() + ' JE JAKO ZAGAĐEN!';
          slika.src = maskotaJankoZagadjen;
          kartica.style.backgroundColor = '#895aa3';
          header.style.color = '#895aa3';
          stanica.style.border = '3px solid #895aa3';

        }



      }
      //this.chartData=[ { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }];

    }
    );

    console.log(this.DatumR);

    console.log('Prikaz NO2');
    console.log(this.NajnoviDatum.NO2);

    //chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];




  }


  ngOnInit(): void {

    var slika = document.getElementById("maskota") as HTMLImageElement;

    slika.src = '../assets/img/odlican.png';

    const kartica = document.getElementById("kartica") as HTMLDivElement;
    kartica.style.backgroundColor = '#8fc74a';

    this.UcitajStanice();
    this.UcitajZagadjenje();

    var header = document.getElementById("header") as HTMLElement;
    header.innerHTML = 'Procena zagadjenja vazduha u saobraćaju'.toUpperCase();

    // this.grafik();

  }



}
