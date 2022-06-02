import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { StanicaComponent } from './stanica/stanica.component';
import { ZagadjenostComponent } from './zagadjenost/zagadjenost.component';
import { VremeComponent } from './vreme/vreme.component';
import { PrikazComponent } from './prikaz/prikaz.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [



  { path: 'admin/stanica', component: StanicaComponent },
  { path: 'admin/vreme', component: VremeComponent },
  { path: 'admin/zagadjenje', component: ZagadjenostComponent },
  { path: 'prikaz', component: PrikazComponent },
  {
    path: '',
    redirectTo: '/prikaz',
    pathMatch: 'full'
  },
 
  {path: 'login',component:LoginComponent},
  {path: '**', component: PrikazComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
