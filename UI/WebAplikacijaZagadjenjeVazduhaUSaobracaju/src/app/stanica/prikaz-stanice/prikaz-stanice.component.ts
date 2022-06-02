import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-prikaz-stanice',
  templateUrl: './prikaz-stanice.component.html',
  styleUrls: ['./prikaz-stanice.component.css']
})
export class PrikazStaniceComponent implements OnInit {

  constructor(private service: SharedService) { }
  ModalTitle?: string;
  ActivateDodajIzmeniStanicaKomp?: boolean;
  stanica?: any;
  StanicaList: any = [];

  ngOnInit(): void {
    this.refreshStanica();
  }

  addClick() {
    this.stanica = {
      IdStanice: 0,
      Region: "",
      Grad: "",
      Mesto: ""
    }
    this.ModalTitle="Dodaj Stanicu";
    this.ActivateDodajIzmeniStanicaKomp=true;

  }
  closeClick(){
    this.ActivateDodajIzmeniStanicaKomp=false;
    this.refreshStanica();
  }

  addEdit(item:any){
    this.stanica=item;
    this.ModalTitle = "Izmeni stanicu";
    this.ActivateDodajIzmeniStanicaKomp=true;
  }

  deleteClick(item:any){
    if(confirm('Da li ste sigurni')){
      this.service.deleteStanica(item.IdStanice).subscribe(res=>{
        alert(res.toString());
        this.refreshStanica();
      });
    }
  }

  refreshStanica() {
    this.service.getStanice().subscribe(data => {
      this.StanicaList = data;
    });
  }

}
