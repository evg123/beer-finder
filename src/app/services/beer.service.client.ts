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

  findBeerById(bid: number) {
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

  findBeersByName(name: string) {
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
}
