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

  getId(coffeeId:String, callback: Function){
    this.httpClient.get(`${this.endpoint}${this.coffeeEntity}/${coffeeId}`)
      .subscribe(res => callback(res));
  }

  save(coffee: any, callback:  Function){
    console.log('dataService save', coffee)
    if (coffee._id) {
      // TODO: Error checking
      this.httpClient.put(`${this.endpoint}${this.coffeeEntity}/${coffee._id}`, coffee)
        .subscribe(response => callback(true));
    } else {
      // It's a new item
      this.httpClient.post(`${this.endpoint}${this.coffeeEntity}`, coffee)
        .subscribe(response => callback(true));
    }
  }
}
