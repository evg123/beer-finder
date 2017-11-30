import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class LocationService {

  constructor(private _http: Http) {  }

  baseUrl = environment.serverBaseUrl;

  createLocation(location: any) {
    return this._http.post(this.baseUrl + '/api/loc', +location)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findLocationsByName(query: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('query', query);

    const requestOpts: RequestOptions = new RequestOptions({
      search: params
    });

    return this._http.get(this.baseUrl + '/api/loc', requestOpts)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findLocationById(locationId: string) {
    return this._http.get(this.baseUrl + '/api/location/' + locationId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateLocation(locationId: string, location: any) {
    return this._http.put(this.baseUrl + '/api/location/' + locationId, location)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteLocation(locationId: string) {
    return this._http.delete(this.baseUrl + '/api/location/' + locationId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findStockByLocation(lid: number) {
    return this._http.get(this.baseUrl + '/api/location/' + lid + '/stock')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
