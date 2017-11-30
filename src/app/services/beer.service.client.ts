import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class BeerService {

  constructor(private _http: Http) { }

  serverBaseUrl = environment.serverBaseUrl;
  untappdBaseUrl = environment.untappdBaseUrl;

  clientId: string;
  clientSecret: string;

  getUntappdInfo() {
    // get untappd access info
    return this._http.get(this.serverBaseUrl + '/api/untappd-info')
      .map(
        (res: Response) => {
          const data = res.json();
          this.clientId = data.clientId;
          this.clientSecret = data.clientSecret;
        }
      );
  }

  findUntappdBeerById(bid: number) {
    return this.getUntappdInfo()
      .flatMap((data) => {
        const params: URLSearchParams = new URLSearchParams();
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);

        const requestOpts: RequestOptions = new RequestOptions ({
          search: params
        });
        return this._http.get(this.untappdBaseUrl + '/beer/info/' + bid, requestOpts);
      })
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUntappdBeersByName(name: string) {
    return this.getUntappdInfo()
      .flatMap((data) => {
        const queryStr = name;
        const params: URLSearchParams = new URLSearchParams();
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);
        params.append('q', queryStr);

        const requestOpts: RequestOptions = new RequestOptions ({
          search: params
        });
        return this._http.get(this.untappdBaseUrl + '/search/beer', requestOpts);
      })
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  createBeer(beer: any) {
    return this._http.post(this.serverBaseUrl + '/api/loc', +beer)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findBeersByName(query: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('query', query);

    const requestOpts: RequestOptions = new RequestOptions({
      search: params
    });

    return this._http.get(this.serverBaseUrl + '/api/loc', requestOpts)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findBeerById(beerId: string) {
    return this._http.get(this.serverBaseUrl + '/api/beer/' + beerId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateBeer(beerId: string, beer: any) {
    return this._http.put(this.serverBaseUrl + '/api/beer/' + beerId, beer)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteBeer(beerId: string) {
    return this._http.delete(this.serverBaseUrl + '/api/beer/' + beerId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findStockByBeer(bid: number) {
    return this._http.get(this.serverBaseUrl + '/api/beer/' + bid + '/stock')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  reportBeer(stock: any) {
    return this._http.post(this.serverBaseUrl + '/api/beer/' + stock.bid + '/report', stock)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
