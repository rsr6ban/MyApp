import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent}from '..//app/login/login.component'
import {RegistrationComponent}from '..//app/registration/registration.component'
import {DatabindigComponent}from'..//app/databindig/databindig.component'
import {PageloaderrorComponent}from '..//app/pageloaderror/pageloaderror.component'

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'databinding',component:DatabindigComponent},
  {path:'**',component:PageloaderrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
