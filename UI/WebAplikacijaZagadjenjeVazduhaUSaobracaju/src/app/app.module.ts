import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZagadjenostComponent } from './zagadjenost/zagadjenost.component';
import { PrikazZagadjenostiComponent } from './zagadjenost/prikaz-zagadjenosti/prikaz-zagadjenosti.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { VremeComponent } from './vreme/vreme.component';
import { PrikazVremenaComponent } from './vreme/prikaz-vremena/prikaz-vremena.component';
import { StanicaComponent } from './stanica/stanica.component';
import { PrikazStaniceComponent } from './stanica/prikaz-stanice/prikaz-stanice.component';
import { DodajIzmeniStanicaComponent } from './stanica/dodaj-izmeni-stanica/dodaj-izmeni-stanica.component';
import { DodajIzmeniVremeComponent } from './vreme/dodaj-izmeni-vreme/dodaj-izmeni-vreme.component';
import { DodajIzmeniZagadjenostComponent } from './zagadjenost/dodaj-izmeni-zagadjenost/dodaj-izmeni-zagadjenost.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PrikazComponent } from './prikaz/prikaz.component';
import { LoginComponent } from './login/login.component';

import { ChartsModule } from "@rinminase/ng-charts";
@NgModule({
  declarations: [
    AppComponent,
    ZagadjenostComponent,
    PrikazZagadjenostiComponent,
    VremeComponent,
    PrikazVremenaComponent,
    StanicaComponent,
    PrikazStaniceComponent,
    DodajIzmeniStanicaComponent,
    
    DodajIzmeniVremeComponent,
    DodajIzmeniZagadjenostComponent,
    PrikazComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ChartsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
