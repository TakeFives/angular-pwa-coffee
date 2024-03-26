import { Injectable } from '@angular/core';
import { buffer } from 'rxjs';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  requestLocation(callback: Function) {
    // W3C Geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      }, 
      error => {
        //TODO: log the error in the system
        callback(null);
      }
    )
  }

  getMapLink(location: PlaceLocation) {
    let query = '';
    if (location.latitude && location.longtitude) {
      query = `${location.latitude},${location.longtitude}`;
    } else {
      query = `${location.address},${location.city}`;
    }

    if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`;
    }else{
      return `https://maps.google.com/?q=${query}`;
    }
  }
  // Universal links

  constructor() { }
}
