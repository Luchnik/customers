import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <p><i>{{name}} is in the {{region}} region</i></p>
    <button (click)="addressClick()">Add/Show address</button>
    <div [hidden]="hideAddress">
      <fieldset>
        <label>Street: </label> {{street}}
      </fieldset>
      <fieldset>
        <label>City</label> {{city}}
      </fieldset>
      <fieldset>
        <label>Region</label>
        <select (change)="regionChange($event.target.value)">
          <option>east</option>
          <option>north</option>
          <option>south</option>
          <option>west</option>
        </select>
      </fieldset>
    </div>

    <fieldset>
      <img [src]="image" alt="favicon">
    </fieldset>
    <label [style.color]="color">Favourite color</label> {{color}}
    <button (click)="clicked()">Change color</button>
    <select (change)="changeColor($event.target.value)">
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
  `,
})
export class AppComponent { 
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';
  street = '19 Karmanskogo';
  city = 'Lviv';
  region = 'east';
  hideAddress = false;

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  changeColor(color: string) {
    this.color = color;
  }

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}
