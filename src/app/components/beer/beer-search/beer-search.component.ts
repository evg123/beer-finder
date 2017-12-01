import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  beerList: any[];
  query: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private beerSvc: BeerService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
        }
      );
  }

  search() {
    this.beerSvc.findBeersByName(this.query)
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

}
