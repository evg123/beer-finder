
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {BeerDetailComponent} from './components/beer/beer-detail/beer-detail.component';
import {LocationDetailComponent} from './components/location/location-detail/location-detail.component';
import {BeerSearchComponent} from './components/beer/beer-search/beer-search.component';


const APP_ROUTES: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'user/:uid', component : ProfileComponent},
  {path: 'beer/search', component : BeerSearchComponent},
  {path: 'beer/:bid', component : BeerDetailComponent},
  {path: 'location/:lid', component : LocationDetailComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
