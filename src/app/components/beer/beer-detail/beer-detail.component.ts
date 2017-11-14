import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';

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
          this.beerData = data;
        },
        (error: any) => {
          this.errorMsg = 'Failed to find beer';
          this.errorFlag = true;
        }
      );
  }

}