import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 
  hideAddress = false;

  //customer: Customer = new Customer();
  customer: Customer = {
    id: 1,
    name: 'Alex Price',
    address: {
      street: '19 Karmanskogo',
      city: 'Lviv',
      region: 'east',
      state: 'California'
    }
  };

  /*
  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
  */
}