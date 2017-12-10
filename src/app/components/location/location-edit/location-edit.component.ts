import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LocationService} from '../../../services/location.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  @ViewChild('locForm') locForm: NgForm;

  // properties
  errorFlag: boolean;
  errorMsg: string;

  lid: number;
  location: any;
  description: string;
  name: string;
  address: string;
  image: string;

  constructor(private locationSvc: LocationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.lid = params['lid'];

          this.locationSvc.findLocationById(this.lid)
            .subscribe(
              (data: any) => {
                this.location = data;
                this.name = this.location.name;
                this.description = this.location.description;
                this.address = this.location.address;
                this.image = this.location.image;
              },
              (error: any) => {
                this.errorMsg = 'Failed to find location';
                this.errorFlag = true;
              }
            );
        }
      );
  }

  update() {
    const location: any = {};
    location.name = this.locForm.value.name || this.location.name;
    location.description = this.locForm.value.description || this.location.description;
    location.address = this.locForm.value.address || this.location.address;
    location.image = this.locForm.value.image || this.location.image;

    this.locationSvc.updateLocation(this.lid, location)
      .subscribe(
        (data: any) => {
          this.router.navigate(['location', this.lid]);
        },
        (error: any) => {
          this.errorMsg = 'Failed to update location';
          this.errorFlag = true;
        }
      );
  }

  deleteLocation() {
    this.locationSvc.deleteLocation(this.lid)
      .subscribe(
        (data: any) => {
          this.router.navigate(['location', 'search']);
        },
        (error: any) => {
          this.errorMsg = 'Failed to delete location';
          this.errorFlag = true;
        }
      );
  }

}
