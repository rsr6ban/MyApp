import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DatabindigComponent } from './databindig/databindig.component';
import {FormsModule} from'@angular/forms';
import { PageloaderrorComponent } from './pageloaderror/pageloaderror.component';
import { HomepageComponent } from './homepage/homepage.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DatabindigComponent,
    PageloaderrorComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
