import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PrincipalComponent} from './principal/principal.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: PrincipalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
