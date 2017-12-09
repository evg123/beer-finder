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
    location.name = this.locForm.value.name;
    location.description = this.locForm.value.description;

    this.locationSvc.updateLocation(this.lid, location)
      .subscribe(
        (data: any) => {
          this.router.navigate(['location', this.lid]);
        },
        (error: any) => {
          this.errorMsg = 'Failed to create new location';
          this.errorFlag = true;
        }
      );
  }

}
