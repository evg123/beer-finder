import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  @Input() locationList: any[];

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
}
