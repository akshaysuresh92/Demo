import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public orderList : Array<any> = [];
  @Input() searchText: string = '';
  constructor() { }

  ngOnInit() {
    this.orderList = [
      {
        "orderId": 101,
        "name": "Akshay Suresh",
        "email": "akshay@infy.com",
        "contactNumber": "1234567890",
        "Address": "ABC, Phase2, Trivandrum",
        "price": 32.99
      },
      {
        "orderId": 102,
        "name": "Ashwant Suresh",
        "email": "akshay@infy.com",
        "contactNumber": "1234567890",
        "Address": "ABC, Phase2, Trivandrum",
        "price": 32.99
      },
      {
        "orderId": 103,
        "name": "Hyra Suresh",
        "email": "akshay@infy.com",
        "contactNumber": "1234567890",
        "Address": "ABC, Phase2, Trivandrum",
        "price": 32.99
      }
    ]
  }

}
