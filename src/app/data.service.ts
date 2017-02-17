import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { createTestCustomers } from './test-data'; 
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {
  private customersUrl = 'api/customers';
  private statesUrl = 'api/states';

  constructor(
    private logger: LoggerService,
    private http: Http
  ) { }

  // with promises
  getCustomersP(): Promise<Customer[]> {
    this.logger.log(`Getting customers as a promise as HTTP...`);

    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => {
        const cust = response.json().data as Customer[];
        this.logger.log(`Got ${cust.length} customers`);
        return cust;
      },
      error => {
        this.logger.log(`Error occured ${error}`);
        return Promise.reject('Something happened with customers, check console');
      }
    );
  }

  // with observables
  getCustomers(): Observable<Customer[]> {
    this.logger.log(`Getting customers as Observable via HTTP...`);

    return this.http.get(this.customersUrl)
      .map(response => response.json().data as Customer[])
      .do((custs) => {
        this.logger.log(`Got ${custs.length} customers`);
      })
      .catch((error: any) => {
        this.logger.log(`Error occured ${error}`);
        return Observable.throw('Something happened with customers, check console');
      });
  }

  getStates(): Observable<string[]> {
    this.logger.log(`Getting states as Observable via HTTP...`);
    return this.http.get(this.statesUrl)
      .map(response => response.json().data as string[])
      .do((states) => {
        this.logger.log(`Got ${states.length} states`);
      })
      .catch((error: any) => {
        this.logger.log(`Error occured ${error}`);
        return Observable.throw('Something happened with states, check console');
      });
  }

}