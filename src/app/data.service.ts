import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public endpoint = "http://localhost:3000";
  public coffeeEntity = "/coffees";

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(callback: Function){
   this.httpClient.get(`${this.endpoint}${this.coffeeEntity}`)
   .subscribe(response => callback(response))
  }

  save(coffee: any, callback:  Function){
    if (coffee.id) {
      // TODO: Error checking
      this.httpClient.put(`${this.endpoint}${this.coffeeEntity}/${coffee.id}`, coffee)
        .subscribe(response => callback(true));
    } else {
      // It's a new item
      this.httpClient.post(`${this.endpoint}${this.coffeeEntity}`, coffee)
        .subscribe(response => callback(true));
    }
  }
}
