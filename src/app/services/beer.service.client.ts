import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class BeerService {

  constructor(private _http: Http) { }

  baseUrl = environment.serverBaseUrl;

  clientId: string;
  clientSecret: string;

  findBeersByName(query: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('query', query);

    const requestOpts: RequestOptions = new RequestOptions({
      search: params
    });

    return this._http.get(this.baseUrl + '/api/beer', requestOpts)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findBeerById(beerId: number) {
    return this._http.get(this.baseUrl + '/api/beer/' + beerId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateBeer(beerId: string, beer: any) {
    return this._http.put(this.baseUrl + '/api/beer/' + beerId, beer)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteBeer(beerId: string) {
    return this._http.delete(this.baseUrl + '/api/beer/' + beerId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findStockByBeer(bid: number) {
    return this._http.get(this.baseUrl + '/api/beer/' + bid + '/stock')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findStockByBeerAndLocation(bid: number, lid: number) {
    return this._http.get(this.baseUrl + '/api/beer/' + bid + '/' + lid + '/stock')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  reportBeer(userId: number, stock: any) {
    stock.userId = userId;

    return this._http.post(this.baseUrl + '/api/beer/' + stock.bid + '/report', stock)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
