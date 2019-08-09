import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-lane-information',
  templateUrl: './lane-information.component.html',
  styleUrls: ['./lane-information.component.scss']
})
export class LaneInformationComponent implements OnInit {
  searchField: string;
  originZipCode: any;
  originCity: string = '';
  originState: string = '';
  originCountry: string = '';

  destinationZipCode: any;
  destinationCity: string = '';
  destinationState: string = '';
  destinationCountry: string = '';

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  getAddress(value, location) {
    this.searchField = 'zipCode';
    this.orderService.getAddress(value)
      .subscribe((data: any) => {
        console.log(data);
        if (data.results.length) {
          const addressArray = data.results[0].address_components;
          this.populateAddress(addressArray, location);
        }
      });
  }

  getZipCode(address, location) {
    this.searchField = 'city';
    this.orderService.getZipCode(address)
      .subscribe((data: any) => {
        console.log(data);
        if (data.results.length) {
          const addressArray = data.results[0].address_components;
          this.populateAddress(addressArray, location);
        }
      });
  }

  populateAddress(addressArray, location) {
    if (location === 'origin') {
      this.clearOriginData();
      addressArray.forEach(address => {
        if ((address.types[0] === 'administrative_area_level_2' || address.types[0] === 'locality') && this.searchField !== 'city') {
          this.originCity = address.long_name;
        } else if (address.types[0] === 'administrative_area_level_1') {
          this.originState = address.long_name;
        } else if (address.types[0] === 'country') {
          this.originCountry = address.long_name;
        } else if (address.types[0] === 'postal_code' && this.searchField !== 'zipCode') {
          this.originZipCode = address.long_name;
        }
      })
    } else {
      this.clearDestinationData();
      addressArray.forEach(address => {
        if ((address.types[0] === 'administrative_area_level_2' || address.types[0] === 'locality') && this.searchField !== 'city') {
          this.destinationCity = address.long_name;
        } else if (address.types[0] === 'administrative_area_level_1') {
          this.destinationState = address.long_name;
        } else if (address.types[0] === 'country') {
          this.destinationCountry = address.long_name;
        } else if (address.types[0] === 'postal_code' && this.searchField !== 'zipCode') {
          this.destinationZipCode = address.long_name;
        }
      })
    }
  }

  clearOriginData() {
    this.searchField === 'city' ? this.originCity = this.originCity : this.originCity = '';
    this.originState = '';
    this.originCountry = '';
    this.searchField === 'zipCode' ? this.originZipCode = this.originZipCode : this.originZipCode = null;
  }

  clearDestinationData() {
    this.searchField === 'city' ? this.destinationCity = this.destinationCity : this.destinationCity = '';
    this.destinationState = '';
    this.destinationCountry = '';
    this.searchField === 'zipCode' ? this.destinationZipCode = this.destinationZipCode : this.destinationZipCode = null;
  }

}
