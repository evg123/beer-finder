
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {BeerDetailComponent} from './components/beer/beer-detail/beer-detail.component';
import {LocationDetailComponent} from './components/location/location-detail/location-detail.component';
import {BeerSearchComponent} from './components/beer/beer-search/beer-search.component';
import {AuthGuard} from './services/auth-guard.service';
import {HomeComponent} from './components/home/home.component';
import {LocationSearchComponent} from './components/location/location-search/location-search.component';
import {ReportBeerComponent} from './components/beer/report-beer/report-beer.component';


const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'beer/search', component : BeerSearchComponent},
  {path: 'beer/:bid', component : BeerDetailComponent},
  {path: 'beer/:bid/report', component : ReportBeerComponent},
  {path: 'location/search', component : LocationSearchComponent},
  {path: 'location/:lid', component : LocationDetailComponent},
  {path: 'location/:lid/report', component : ReportBeerComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
