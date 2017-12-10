import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationService} from '../../../services/location.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  lid: number;
  location: any;
  stockList: any;
  loggedIn = false;
  isOwner = false;
  isAdmin = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedSvc: SharedService,
              private locationSvc: LocationService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.lid = params['lid'];

          this.locationSvc.findLocationById(this.lid)
            .subscribe(
              (data: any) => {
                this.location = data;
                this.updateOnUser();
              },
              (error: any) => {
                this.errorMsg = 'Failed to find location';
                this.errorFlag = true;
              }
            );

          this.locationSvc.findStockByLocation(this.lid)
            .subscribe(
              (data: any) => {
                this.stockList = data;
              },
              (error: any) => {
                this.errorMsg = 'Failed to find location stock';
                this.errorFlag = true;
              }
            );
        }
      );

    this.sharedSvc.loggedIn
      .subscribe(
        (value: any) => {
          this.updateOnUser();
        }
      );
  }

  updateOnUser() {
    this.isAdmin = false;
    this.isOwner = false;
    this.loggedIn = this.sharedSvc.user;
    if (this.sharedSvc.user) {
      this.isAdmin = this.sharedSvc.user.admin;
      if (this.location && this.location.owner) {
        this.isOwner = this.sharedSvc.user._id === this.location.owner._id;
      }
    }
  }

  dateToString(date: Date) {
    return new Date(date).toLocaleDateString();
  }

}
