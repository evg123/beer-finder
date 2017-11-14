import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BeerService {

  constructor(private _http: Http) {
    this.init();
  }

  serverBaseUrl = environment.serverBaseUrl;
  untappdBaseUrl = environment.untappdBaseUrl;

  clientId: string = null;
  clientSecret: string = null;

  init() {
    // get untappd access info
    // probably shouldn't be calling this from the constructor...
    this._http.get(this.serverBaseUrl + '/api/untappd-info')
      .map(
        (res: Response) => {
          const data = res.json();
          this.clientId = data.clientId;
          this.clientSecret = data.clientSecret;
        }
      ).subscribe(
      (data: any) => { },
      (error: any) => {
        console.log('error getting untappd info');
      }
    );
  }

  findBeerById(bid: number) {
    console.log(this.clientId);
    const params: URLSearchParams = new URLSearchParams();
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);

    const requestOpts: RequestOptions = new RequestOptions ({
      search: params
    });

    return this._http.get(this.untappdBaseUrl + '/beer/info/' + bid, requestOpts)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findBeersByName(name: string) {
    const queryStr = name;
    const params: URLSearchParams = new URLSearchParams();
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);
    params.append('q', queryStr);

    const requestOpts: RequestOptions = new RequestOptions ({
      search: params
    });

    return this._http.get(this.untappdBaseUrl + '/search/beer', requestOpts)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
