import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../../services/location.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-claim-location',
  templateUrl: './claim-location.component.html',
  styleUrls: ['./claim-location.component.css']
})
export class ClaimLocationComponent implements OnInit {

  errorFlag: boolean;
  errorMsg: string;
  lid: number;

  constructor(private locationSvc: LocationService,
              private userSvc: UserService,
              private sharedSvc: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.lid = params['lid'];
        }
      );
  }

  fileClaim() {
    const location = {owner: this.sharedSvc.user._id};
    this.locationSvc.updateLocation(this.lid, location)
      .subscribe(
        (data: any) => {
          this.userSvc.addLocation(this.sharedSvc.user._id, this.lid)
            .subscribe(
              (data2: any) => {
                this.router.navigate(['location', this.lid]);
              },
              (error: any) => {
                this.errorMsg = 'Failed to update user';
                this.errorFlag = true;
              }
            );
        },
        (error: any) => {
          this.errorMsg = 'Failed to file claim';
          this.errorFlag = true;
        }
      );
  }

}
