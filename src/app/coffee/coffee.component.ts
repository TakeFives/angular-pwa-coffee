import { Component } from '@angular/core';
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private geolocation: GeolocationService,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.dataService.getId(params['id'], (response: any) => {
          this.coffee = response;
          this.formType = "editing";
          if (this.coffee.tastingRating) {
            this.tastingEnabled = true;
          }
        });
      }
    })
  }

  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }

  acquireLocation() {
    this.geolocation.requestLocation((location: GeolocationCoordinates | null) => {
      if (location) {
        this.coffee.location!.latitude = location.latitude;
        this.coffee.location!.longtitude = location.longitude;
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  save() {
    let resultFunction = (result: boolean) => {
      if (result) {
        this.router.navigate(["/"]);
      } else {
        // TODO: render a nice error message
      }
    }

    if (this.formType === "inserting") {
      let { _id, ...insertedCoffee } = this.coffee;
      this.dataService.save(insertedCoffee, resultFunction);
    } else {
      this.dataService.save(this.coffee, resultFunction);
    }
  }
}
