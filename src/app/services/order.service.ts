import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private googleApiUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAKTxCVrybfyg3QUod2sf3f2ErpVAYoQww&';
  constructor(private _http : HttpClient) { }

  public getAddress(zipCode) {
    return this._http.get(this.googleApiUrl + 'components=postal_code:'+zipCode);
  };

  public getZipCode(city) {
    return this._http.get(this.googleApiUrl + 'address='+city);
  }
}
