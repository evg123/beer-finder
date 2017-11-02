import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BeerService {

  constructor(private _http: Http) { }

  serverBaseUrl = environment.serverBaseUrl;
  untappdBaseUrl = environment.untappdBaseUrl;

  // TODO store in database
  clientId = 'asdf';
  clientSecret = 'lkjh';

  findBeerById(bid: number) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('client_id', this.clientId);
    params.set('client_secret', this.clientSecret);

    const requestOpts: RequestOptions = new RequestOptions ({
      search: params
    });

    return this._http.get(this.untappdBaseUrl + '/beer/info/' + bid)
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
    params.set('q', queryStr);

    const requestOpts: RequestOptions = new RequestOptions ({
      search: params
    });

    return this._http.get(this.untappdBaseUrl + '/search/beer')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
