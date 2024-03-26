import { Component } from '@angular/core';
import { Coffee } from '../logic/Coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent {

    coffee = new Coffee();
    types = [
      'Espresso',
      'Latte',
      'Cappuccino',
      'Americano',
      'Mocha',
      'Macchiato',
      'Affogato',
      'Flat White',
      'Irish Coffee',
      'Turkish Coffee'
  ];

    cancel(){}

    save(){}
}
