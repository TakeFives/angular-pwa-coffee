import { Injectable } from '@angular/core';
import { PlaceLocation } from './logic/PlaceLocation';
import { Coffee } from './logic/Coffee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback: Function){
    const list = [
      new Coffee('Espresso', 'Coffee House A', new PlaceLocation('123 Main St', 'New York')),
      new Coffee('Latte', 'Cafe B', new PlaceLocation('456 Elm St', 'Los Angeles')),
      new Coffee('Cappuccino', 'Java Junction', new PlaceLocation('789 Oak St', 'Chicago')),
      new Coffee('Americano', 'Mocha Madness', new PlaceLocation('101 Pine St', 'San Francisco')),
      new Coffee('Mocha', 'Bean Bar', new PlaceLocation('202 Maple St', 'Seattle')),
      new Coffee('Macchiato', 'Brew Bistro', new PlaceLocation('303 Cedar St', 'Boston')),
      new Coffee('Affogato', 'Sugar & Spice', new PlaceLocation('404 Birch St', 'Miami')),
      new Coffee('Flat White', 'Creamy Cafe', new PlaceLocation('505 Walnut St', 'Houston')),
      new Coffee('Irish Coffee', 'Shamrock Roasters', new PlaceLocation('606 Spruce St', 'Philadelphia')),
      new Coffee('Turkish Coffee', 'Bosphorus Brews', new PlaceLocation('707 Cherry St', 'Atlanta'))
  ];
  callback(list);
  }

  // getList(): Promise<Coffee[]> {
  //   return new Promise((resolve, reject) => {
  //       const list = [
  //           new Coffee('Espresso', 'Coffee House A', new PlaceLocation('123 Main St', 'New York')),
  //           new Coffee('Latte', 'Cafe B', new PlaceLocation('456 Elm St', 'Los Angeles')),
  //           new Coffee('Cappuccino', 'Java Junction', new PlaceLocation('789 Oak St', 'Chicago')),
  //           new Coffee('Americano', 'Mocha Madness', new PlaceLocation('101 Pine St', 'San Francisco')),
  //           new Coffee('Mocha', 'Bean Bar', new PlaceLocation('202 Maple St', 'Seattle')),
  //           new Coffee('Macchiato', 'Brew Bistro', new PlaceLocation('303 Cedar St', 'Boston')),
  //           new Coffee('Affogato', 'Sugar & Spice', new PlaceLocation('404 Birch St', 'Miami')),
  //           new Coffee('Flat White', 'Creamy Cafe', new PlaceLocation('505 Walnut St', 'Houston')),
  //           new Coffee('Irish Coffee', 'Shamrock Roasters', new PlaceLocation('606 Spruce St', 'Philadelphia')),
  //           new Coffee('Turkish Coffee', 'Bosphorus Brews', new PlaceLocation('707 Cherry St', 'Atlanta'))
  //       ];
  //       if (list.length > 0) {
  //           resolve(list);
  //       } else {
  //           reject("Error: Unable to get the list of coffees.");
  //       }
  //   });
// }
}
