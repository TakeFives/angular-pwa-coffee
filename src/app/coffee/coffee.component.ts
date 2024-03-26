import { Component } from '@angular/core';
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';

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
  tastingEnabled = false;

  constructor(
    private geolocation:GeolocationService,
  ){}

    tastingRatingChanged(checked: boolean){
      if(checked){
        this.coffee.tastingRating  = new TastingRating();
      } else {
        this.coffee.tastingRating = null;
      }
    }

  acquireLocation() { 
    this.geolocation.requestLocation((location: GeolocationCoordinates | null) => {
      if(location){
        this.coffee.location!.latitude = location.latitude;
        this.coffee.location!.longtitude = location.longitude;
      }
    });
  }

  cancel() { }

  save() { }
}
