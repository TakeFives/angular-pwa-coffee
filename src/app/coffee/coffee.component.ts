import { Component } from '@angular/core';
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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
  formType: "editing" | "inserting" = "inserting";

  constructor(
    private geolocation:GeolocationService,
    private dataService: DataService,
    private router: Router
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

  cancel() { 
    this.router.navigate(['/']);
  }

  save() {
    let resultFunction = (result:boolean)=> {
      if(result){
        this.router.navigate(['/']);
      } else {
        //TODO nice error message
      }
    }

    if(this.formType === "inserting"){
      let {id,...insertedCoffee} = this.coffee;
      this.dataService.save(insertedCoffee, resultFunction);
    }
  }
}
