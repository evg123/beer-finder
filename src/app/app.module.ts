import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerDetailComponent } from './components/beer/beer-detail/beer-detail.component';
import { LocationDetailComponent } from './components/location/location-detail/location-detail.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import {BeerService} from './services/beer.service.client';
import {LocationService} from './services/location.service.client';
import {UserService} from './services/user.service.client';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routing';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { BeerSearchComponent } from './components/beer/beer-search/beer-search.component';
import { BeerListComponent } from './components/beer/beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    LocationDetailComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    BeerSearchComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
  ],
  providers: [BeerService, LocationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
