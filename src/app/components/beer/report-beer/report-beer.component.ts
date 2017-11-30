import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';
import {LocationService} from '../../../services/location.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-report-beer',
  templateUrl: './report-beer.component.html',
  styleUrls: ['./report-beer.component.css']
})
export class ReportBeerComponent implements OnInit {

  @ViewChild('form') repForm: NgForm;

  errorFlag = false;
  errorMsg = '';

  bid: number;
  lid: number;
  backRoute: string;
  beerList: any[] = [];
  locationList: any[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private beerSvc: BeerService,
              private locSvc: LocationService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.bid = params['bid'];
          this.lid = params['lid'];

          // remember where we should return to after we are done
          if (this.bid) {
            this.backRoute = '/beer/' + this.bid;
          } else if (this.lid) {
            this.backRoute = '/location/' + this.lid;
          } else {
            this.backRoute = '/';
          }
        }
      );
  }

  report() {
    const stock: any = {};
    stock.bid = this.repForm.value.bid;
    stock.lid = this.repForm.value.lid;
    stock.count = this.repForm.value.count;

    this.beerSvc.reportBeer(stock)
      .subscribe(
        (data: any) => {
          this.goBack();
        },
        (error: any) => {
          this.errorMsg = 'Failed to find beer';
          this.errorFlag = true;
        }
      );
  }

  searchBeers() {
    this.beerSvc.findBeersByName(this.repForm.value.beerQuery)
      .subscribe(
        (data: any) => {
          this.beerList = data;
        },
        (error: any) => {
          this.errorMsg = 'Search failed';
          this.errorFlag = true;
        }
      );
  }

  searchLocations() {
    this.locSvc.findLocationsByName(this.repForm.value.locationQuery)
      .subscribe(
        (data: any) => {
          this.locationList = data;
        },
        (error: any) => {
          this.errorMsg = 'Search failed';
          this.errorFlag = true;
        }
      );
  }

  goBack() {
    this.router.navigate([this.backRoute]);
  }
}
