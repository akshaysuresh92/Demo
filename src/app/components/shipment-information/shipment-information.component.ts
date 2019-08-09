import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-information',
  templateUrl: './shipment-information.component.html',
  styleUrls: ['./shipment-information.component.scss']
})
export class ShipmentInformationComponent implements OnInit {
  commodityList: string[] = ['Shoe', 'Fan', 'Watch', 'Shirt'];
  constructor() { }

  ngOnInit() {
  }

}
