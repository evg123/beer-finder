import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BeerDetailComponent} from './components/beer/beer-detail/beer-detail.component';
import {LocationDetailComponent} from './components/location/location-detail/location-detail.component';
import {UserEditComponent} from './components/user/user-edit/user-edit.component';
import {BeerService} from './services/beer.service.client';
import {LocationService} from './services/location.service.client';
import {UserService} from './services/user.service.client';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routing';
import {RegisterComponent} from './components/user/register/register.component';
import {LoginComponent} from './components/user/login/login.component';
import {BeerSearchComponent} from './components/beer/beer-search/beer-search.component';
import {BeerListComponent} from './components/beer/beer-list/beer-list.component';
import {AuthGuard} from './services/auth-guard.service';
import {SharedService} from './services/shared.service';
import {HomeComponent} from './components/home/home.component';
import {ReportBeerComponent} from './components/beer/report-beer/report-beer.component';
import {LocationSearchComponent} from './components/location/location-search/location-search.component';
import {ManageLocationsComponent} from './components/location/manage-locations/manage-locations.component';
import {LocationListComponent} from './components/location/location-list/location-list.component';
import {NewLocationComponent} from './components/location/new-location/new-location.component';
import {UserSearchComponent} from './components/user/user-search/user-search.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {UserDetailComponent} from './components/user/user-detail/user-detail.component';
import { LocationEditComponent } from './components/location/location-edit/location-edit.component';
import { SiteHeaderComponent } from './components/site/site-header/site-header.component';
import { NotFoundComponent } from './components/site/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    LocationDetailComponent,
    RegisterComponent,
    LoginComponent,
    BeerSearchComponent,
    BeerListComponent,
    HomeComponent,
    ReportBeerComponent,
    LocationSearchComponent,
    ManageLocationsComponent,
    LocationListComponent,
    NewLocationComponent,
    UserSearchComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
    LocationEditComponent,
    SiteHeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  providers: [SharedService, AuthGuard, BeerService, LocationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
