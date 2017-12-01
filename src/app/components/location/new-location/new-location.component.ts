import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LocationService} from '../../../services/location.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})
export class NewLocationComponent implements OnInit {

  @ViewChild('locForm') locForm: NgForm;

  // properties
  errorFlag: boolean;
  errorMsg: string;

  constructor(private locationService: LocationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
        }
      );
  }

  create() {
    const location: any = {};
    location.name = this.locForm.value.name;
    location.description = this.locForm.value.description;
    this.locationService.createLocation(location)
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
