import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationService} from '../../../services/location.service.client';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  results: any;
  locationList: any[];
  query: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private locSvc: LocationService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
        }
      );
  }

  search() {
    this.locSvc.findLocationsByName(this.query)
      .subscribe(
        (data: any) => {
          this.results = data;
          this.locationList = this.results;
        },
        (error: any) => {
          this.errorMsg = 'Search failed';
          this.errorFlag = true;
        }
      );
  }

}
