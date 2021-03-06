import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';
import {LocationService} from '../../../services/location.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-report-beer',
  templateUrl: './report-beer.component.html',
  styleUrls: ['./report-beer.component.css']
})
export class ReportBeerComponent implements OnInit {

  @ViewChild('form') repForm: NgForm;

  errorFlag = false;
  errorMsg = '';

  bid: number = null;
  beerData: any = null;
  beerName = '';
  lid: number = null;
  locationData: any = null;
  locationName = '';
  backRoute: string;
  beerList: any[] = [];
  locationList: any[] = [];
  stock: any = null;
  stockCount: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedSvc: SharedService,
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
            this.beerSvc.findBeerById(this.bid)
              .subscribe(
                (data: any) => {
                  this.beerData = data;
                  this.beerName = this.beerData.beer_name;
                },
                (error: any) => {
                  this.errorMsg = 'Failed to find beer';
                  this.errorFlag = true;
                }
              );
          } else if (this.lid) {
            this.backRoute = '/location/' + this.lid;
            this.locSvc.findLocationById(this.lid)
              .subscribe(
                (data: any) => {
                  this.locationData = data;
                  this.locationName = this.locationData.name;
                },
                (error: any) => {
                  this.errorMsg = 'Failed to find location';
                  this.errorFlag = true;
                }
              );
          } else {
            this.backRoute = '/';
          }
        }
      );
  }

  report() {
    let stock: any = {};
    if (this.stock) {
      stock = this.stock;
    }
    stock.lid = this.lid;
    stock.bid = this.bid;
    stock.count = this.repForm.value.count;
    const userId = this.sharedSvc.user._id;

    this.beerSvc.reportBeer(userId, stock)
      .subscribe(
        (data: any) => {
          this.goBack();
        },
        (error: any) => {
          this.errorMsg = 'Failed to report beer in stock';
          this.errorFlag = true;
        }
      );
  }

  searchBeers() {
    this.beerList = [];
    this.locationList = [];
    this.beerSvc.findBeersByName(this.repForm.value.beerQuery)
      .subscribe(
        (data: any) => {
          this.beerList = data.response.beers.items;
        },
        (error: any) => {
          this.errorMsg = 'Search failed';
          this.errorFlag = true;
        }
      );
  }

  searchLocations() {
    this.beerList = [];
    this.locationList = [];
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

  setBeer(beerRecord: any) {
    this.bid = beerRecord.beer.bid;
    this.beerData = beerRecord;
    this.beerName = this.beerData.beer.beer_name;
    this.checkStock();
  }

  setLocation(location: any) {
    this.lid = location._id;
    this.locationData = location;
    this.locationName = this.locationData.name;
    this.checkStock();
  }

  clearBeer() {
    this.bid = null;
    this.beerData = null;
    this.beerName = '';
    this.stock = null;
  }

  clearLocation() {
    this.lid = null;
    this.locationData = null;
    this.locationName = '';
    this.stock = null;
  }

  checkStock() {
    if (this.lid && this.bid) {
      this.beerSvc.findStockByBeerAndLocation(this.bid, this.lid)
        .subscribe(
          (data: any) => {
            if (data) {
              this.stock = data;
              this.stockCount = this.stock.count;
            }
          },
          (error: any) => {
            this.errorMsg = 'Stock search failed';
            this.errorFlag = true;
          }
        );
    }
  }

  goBack() {
    this.router.navigate([this.backRoute]);
  }
}
