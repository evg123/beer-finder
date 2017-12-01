import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationService} from '../../../services/location.service.client';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  lid: number;
  name: string;
  description: string;
  stockList: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private locationSvc: LocationService) { }

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
          this.name = data.name;
          this.description = data.description;
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

}
