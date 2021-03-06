import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { Observable } from 'rxjs/Rx';

// import 'rxjs/add/operators/map'; // just get map

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {
  constructor(private _http: Http) { }

  // This is Ward's preference, on Wednesdays
  getCustomers() {
    return this._http.get(URL_CUSTOMER)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => {
        console.log(err); // again, customize me please
        return Promise.reject(err);
      });
  }

  getCustomers_RxObservable() {
    return this._http.get(URL_CUSTOMER)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
  }

  _handlerError(err: any) {
    console.log(err); // log this somewhere and format the message well for devs
    return Observable.throw(err); // our opportunity customize this error
  }
}
