import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeerService} from '../../../services/beer.service.client';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  errorFlag = false;
  errorMsg = '';

  @Input() beerList: any[]; // TODO should be an actual type

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
