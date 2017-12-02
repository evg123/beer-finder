
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {UserEditComponent} from './components/user/user-edit/user-edit.component';
import {RegisterComponent} from './components/user/register/register.component';
import {BeerDetailComponent} from './components/beer/beer-detail/beer-detail.component';
import {LocationDetailComponent} from './components/location/location-detail/location-detail.component';
import {BeerSearchComponent} from './components/beer/beer-search/beer-search.component';
import {AuthGuard} from './services/auth-guard.service';
import {HomeComponent} from './components/home/home.component';
import {LocationSearchComponent} from './components/location/location-search/location-search.component';
import {ReportBeerComponent} from './components/beer/report-beer/report-beer.component';
import {ManageLocationsComponent} from './components/location/manage-locations/manage-locations.component';
import {NewLocationComponent} from './components/location/new-location/new-location.component';
import {UserSearchComponent} from './components/user/user-search/user-search.component';
import {UserDetailComponent} from './components/user/user-detail/user-detail.component';
import {LocationEditComponent} from './components/location/location-edit/location-edit.component';


const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'user/search', component : UserSearchComponent},
  {path: 'user/:userId', component: UserDetailComponent},
  {path: 'user/:userId/edit', component: UserEditComponent, canActivate: [AuthGuard], data: {roles: ['user']}},
  // {path: 'user/:userId/locations', component: ManageLocationsComponent, canActivate: [AuthGuard], data: {roles: ['user']}},
  {path: 'beer/search', component : BeerSearchComponent},
  {path: 'beer/:bid', component : BeerDetailComponent},
  {path: 'beer/:bid/report', component : ReportBeerComponent},
  {path: 'location/search', component : LocationSearchComponent},
  {path: 'location/new', component : NewLocationComponent},
  {path: 'location/:lid', component : LocationDetailComponent},
  {path: 'location/:lid/edit', component : LocationEditComponent, canActivate: [AuthGuard], data: {roles: ['owner']}},
  {path: 'location/:lid/report', component : ReportBeerComponent},
  {path: '**', component : HomeComponent}, // TODO replace with 404 component
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
