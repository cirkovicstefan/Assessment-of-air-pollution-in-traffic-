import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-prikaz-vremena',
  templateUrl: './prikaz-vremena.component.html',
  styleUrls: ['./prikaz-vremena.component.css']
})
export class PrikazVremenaComponent implements OnInit {

  constructor(private service: SharedService) { }
  ModalTitle?: string;
  ActivateDodajIzmeniVremeKomp?: boolean;
  vreme?: any;
  VremList: any = [];

  ngOnInit(): void {
    this.refreshVreme();
  }

  addClick() {
    this.vreme = {
      IdVremena: 0,
      Sat: "",
      Dan: "",
      Datum: ""
    }
    this.ModalTitle="Dodaj vreme";
    this.ActivateDodajIzmeniVremeKomp=true;

  }
  closeClick(){
    this.ActivateDodajIzmeniVremeKomp=false;
    this.refreshVreme();
  }

  addEdit(item:any){
    this.vreme=item;
    this.ModalTitle = "Izmeni vreme";
    this.ActivateDodajIzmeniVremeKomp=true;
  }

  deleteClick(item:any){
    if(confirm('Da li ste sigurni ?')){
      this.service.deleteVreme(item.IdVremena).subscribe(res=>{
        alert(res.toString());
        this.refreshVreme();
      });
    }
  }

  refreshVreme() {
    this.service.getVremena().subscribe(data => {
      this.VremList = data;
    });
  }

}
