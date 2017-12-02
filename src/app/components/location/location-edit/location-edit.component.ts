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

  constructor(private locationSvc: LocationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.lid = params['lid'];
        }
      );

    this.locationSvc.findLocationById(this.lid)
      .subscribe(
        (data: any) => {
          this.location = data;
          this.locForm.value.name = this.location.name;
        },
        (error: any) => {
          this.errorMsg = 'Failed to find location';
          this.errorFlag = true;
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
          this.router.navigate(['location', data._id]);
        },
        (error: any) => {
          this.errorMsg = 'Failed to create new location';
          this.errorFlag = true;
        }
      );
  }

}
