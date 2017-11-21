import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  bid: number;
  beerData: any;
  beerName: string;
  brewery: string;
  style: string;
  stockList: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private beerSvc: BeerService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.bid = params['bid'];
        }
      );

    this.beerSvc.findBeerById(this.bid)
      .subscribe(
        (data: any) => {
          this.beerData = data.response.beer;
          this.beerName = this.beerData.beer_name;
          this.brewery = this.beerData.brewery.brewery_name;
          this.style = this.beerData.beer_style;
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
}
