import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  bid: number;
  beer: any;
  stockList: any;
  loggedIn = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedSvc: SharedService,
              private beerSvc: BeerService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.bid = params['bid'];
          this.loggedIn = this.sharedSvc.user;
        }
      );

    this.beerSvc.findBeerById(this.bid)
      .subscribe(
        (data: any) => {
          this.beer = data;
        },
        (error: any) => {
          this.errorMsg = 'Failed to find beer';
          this.errorFlag = true;
        }
      );

    this.beerSvc.findStockByBeer(this.bid)
      .subscribe(
        (data: any) => {
          this.stockList = data;
        },
        (error: any) => {
          this.errorMsg = 'Failed to find beer stock';
          this.errorFlag = true;
        }
      );
  }

  dateToString(date: Date) {
    return new Date(date).toLocaleDateString();
  }
}
