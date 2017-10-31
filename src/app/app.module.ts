import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerDetailComponent } from './components/beer/beer-detail/beer-detail.component';
import { LocationDetailComponent } from './components/location/location-detail/location-detail.component';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    LocationDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
