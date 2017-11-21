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

  @ViewChild('form') form: NgForm;

  errorFlag = false;
  errorMsg = '';

  bid: number;
  lid: number;

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
        }
      );
  }

  report() {
    const stock: any = {};
    stock.bid = this.form.value.bid;
    stock.lid = this.form.value.lid;
    stock.count = this.form.value.count;

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

  goBack() {
    if (this.bid) {
      this.router.navigate(['/beer/' + this.bid]);
    } else if (this.lid) {
      this.router.navigate(['/location/' + this.lid]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
